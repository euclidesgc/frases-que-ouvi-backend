import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhrasesModule } from './phrases/phrases.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PhrasesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
