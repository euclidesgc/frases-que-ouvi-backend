import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './src/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const expressServer = express();
const createFunction = async (expressInstance): Promise<void> => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  const config = new DocumentBuilder()
    .setTitle('Frases que eu ouvi')
    .setDescription('Frases que eu ouço no trabalho que as vezes me fazem pensar se não é melhor ser surdo.')
    .setVersion('1.0')
    .addServer('/api')
    .addTag('BASE_URL: https://us-central1-phrases-que-ouvi.cloudfunctions.net/api/')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.init();
};

export const api = functions.https.onRequest(async (request, response) => {
  await createFunction(expressServer);
  expressServer(request, response);
});
