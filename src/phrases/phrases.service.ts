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

  findAll() {
    return `This action returns all phrases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phrase`;
  }

  update(id: number, updatePhraseDto: UpdatePhraseDto) {
    return `This action updates a #${id} phrase`;
  }

  remove(id: number) {
    return `This action removes a #${id} phrase`;
  }
}
