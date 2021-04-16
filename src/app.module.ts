import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './config/configuration';
import { ApoyoAlimentarioModule } from './apoyo-alimentario/apoyo-alimentario.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://${environment.USER}:${environment.PASS}@`+
  `${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`, 
  { useFindAndModify: false }),ApoyoAlimentarioModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
