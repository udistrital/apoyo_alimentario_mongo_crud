import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection: 'sintomas'})
export class Sintoma extends Document{

  @Prop({ required: true })
  terceroId: Number;  

  //@Prop({ required: true })
  @Prop(raw({}))
  info_salud: Record<string, any>

  @Prop({ required: true })
  activo: boolean

  @Prop({ required: true })
  fecha_creacion: Date

  @Prop({ required: true })
  fecha_modificacion: Date

};

export const SintomaSchema = SchemaFactory.createForClass(Sintoma);