import { Module } from '@nestjs/common';
import { ApoyoAlimentarioController } from './apoyo-alimentario.controller';
import { ApoyoAlimentarioService } from './apoyo-alimentario.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApoyoAlimentario, ApoyoAlimentarioSchema } from './schemas/apoyo-alimentario.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: ApoyoAlimentario.name, schema: ApoyoAlimentarioSchema}])],
  controllers: [ApoyoAlimentarioController],
  providers: [ApoyoAlimentarioService]
})
export class ApoyoAlimentarioModule {}