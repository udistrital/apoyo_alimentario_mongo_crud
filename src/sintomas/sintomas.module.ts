import { Module } from '@nestjs/common';
import { SintomasController } from './sintomas.controller';
import { SintomasService } from './sintomas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Sintoma, SintomaSchema } from './schemas/sintoma.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Sintoma.name, schema: SintomaSchema}])],
  controllers: [SintomasController],
  providers: [SintomasService]
})
export class SintomasModule {}