import { Injectable } from '@nestjs/common';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { UpdatePhraseDto } from './dto/update-phrase.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhrasesService {

  constructor(private readonly prisma: PrismaService) { }


  async create(createPhraseDto: CreatePhraseDto) {
    return await this.prisma.phrases.create({
      data: {
        phrase: createPhraseDto.phrase,
        context: createPhraseDto.context,
        author: createPhraseDto.author,
        likes: createPhraseDto.likes,
      },
      select: {
        id: true,
      }
    });
  }

  async findAll() {
    return await this.prisma.phrases.findMany();
  }

  async random() {
    const result = await this.prisma.$queryRaw`SELECT * FROM "Phrases" ORDER BY random() LIMIT 1;`;
    return result;
  }

  async findOne(id: number) {
    return await this.prisma.phrases.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updatePhraseDto: UpdatePhraseDto) {
    return await this.prisma.phrases.update({
      where: { id: id },
      data: updatePhraseDto
    });
  }

  async remove(id: number) {
    return this.prisma.phrases.delete({
      where: { id: id }
    });
  }
}
