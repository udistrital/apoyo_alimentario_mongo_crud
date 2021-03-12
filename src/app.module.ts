import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SintomasModule } from './sintomas/sintomas.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/sintomas_crud'),SintomasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
