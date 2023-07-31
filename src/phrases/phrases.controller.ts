import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PhrasesService } from './phrases.service';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { UpdatePhraseDto } from './dto/update-phrase.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('phrases')
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @Post()
  @ApiQuery({ name: 'phrase', type: Map, required: true, description: '{ phrase: string, context: string, author: string, likes: number }' })
  create(@Body() createPhraseDto: CreatePhraseDto) {
    return this.phrasesService.create(createPhraseDto);
  }

  @Get()
  findAll() {
    return this.phrasesService.findAll();
  }

  @Get('random')
  getRandom() {
    return this.phrasesService.random();
  }

  @Get(':id')
  @ApiQuery({ name: 'id', type: Number, required: true, description: 'ID de uma frase cadastrada.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.phrasesService.findOne(id);
  }

  @Patch(':id')
  @ApiQuery({ name: 'id', type: Number, required: true, description: 'ID de uma frase cadastrada.' })
  @ApiQuery({ name: 'phrase', type: Map, required: true, description: '{ phrase: string, context: string, author: string, likes: number }' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePhraseDto: UpdatePhraseDto) {
    return this.phrasesService.update(id, updatePhraseDto);
  }

  @Delete(':id')
  @ApiQuery({ name: 'id', type: Number, required: true, description: 'ID de uma frase cadastrada.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.phrasesService.remove(id);
  }
}
