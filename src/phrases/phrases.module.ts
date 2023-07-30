import { Module } from '@nestjs/common';
import { PhrasesService } from './phrases.service';
import { PhrasesController } from './phrases.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PhrasesController],
  providers: [PhrasesService],
  imports: [PrismaModule],
})
export class PhrasesModule {}
