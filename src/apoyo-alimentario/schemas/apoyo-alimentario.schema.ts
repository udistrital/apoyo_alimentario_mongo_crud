import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection: 'apoyo_alimentario'})
export class ApoyoAlimentario extends Document{

  @Prop({ required: true })
  terceroId: Number;  
  
  @Prop({ required: false })
  solicitudId: Number;  
  
  @Prop({ required: true })
  periodoId: Number;  

  @Prop({ required: true })
  espacioFisicoId: Number;  

  @Prop({ required: true })
  usuarioAdministrador: string;  

  @Prop({ required: true })
  fechaRegistro: string;  

  @Prop({ required: true })
  activo: boolean

  @Prop({ required: true })
  fecha_creacion: Date

  @Prop({ required: true })
  fecha_modificacion: Date

};

export const ApoyoAlimentarioSchema = SchemaFactory.createForClass(ApoyoAlimentario);