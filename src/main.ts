import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { environment } from './config/configuration';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  
  Logger.log('Connection string:');
  Logger.log(`mongodb://${environment.USER}:${environment.PASS}@`+
  `${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`);
  Logger.log(`HTTP_PORT:${environment.HTTP_PORT}`);
  
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
  .setTitle('sintomas_crud')
  .setDescription('API CRUD para el registro de estado de salud diario para el cliente de alternancia.')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  fs.writeFileSync("./swagger.json", JSON.stringify(document));
  SwaggerModule.setup('swagger', app, document);
  
  
  await app.listen( parseInt(environment.HTTP_PORT,10) || 3000);
}
bootstrap();