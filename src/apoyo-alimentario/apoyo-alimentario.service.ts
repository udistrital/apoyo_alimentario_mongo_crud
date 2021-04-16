import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ApoyoAlimentario } from './schemas/apoyo-alimentario.schema';
import { ApoyoAlimentarioDto } from './dto/apoyo-alimentario.dto';
import { FilterDto } from '../filters/dto/filter.dto';
import { FiltersService } from '../filters/filters.service';


@Injectable()
export class ApoyoAlimentarioService {

  constructor(@InjectModel(ApoyoAlimentario.name) private readonly ApoyoAlimentarioModel: Model<ApoyoAlimentario>) { }

  async post(ApoyoAlimentarioDto: ApoyoAlimentarioDto): Promise<ApoyoAlimentario> {        
    const ApoyoAlimentario = new this.ApoyoAlimentarioModel(ApoyoAlimentarioDto);    
    ApoyoAlimentario.fecha_creacion = new Date();    
    ApoyoAlimentario.fecha_modificacion = new Date();    
    return ApoyoAlimentario.save();
  }

  async getAll(filterDto : FilterDto): Promise<ApoyoAlimentario[]> {
    const filtersService = new FiltersService(filterDto);    
    return await this.ApoyoAlimentarioModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
      .sort(filtersService.getSortBy())
      .exec();
  }

  async getById(id: string): Promise<ApoyoAlimentario> {
    try {
      return await this.ApoyoAlimentarioModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async put(id: string, ApoyoAlimentarioDto: ApoyoAlimentarioDto): Promise<ApoyoAlimentario> {
    try {            
      ApoyoAlimentarioDto.fecha_modificacion = new Date();
      await this.ApoyoAlimentarioModel.findByIdAndUpdate(id, ApoyoAlimentarioDto, {new: true}).exec();
      return await this.ApoyoAlimentarioModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      return await this.ApoyoAlimentarioModel.findByIdAndRemove(id).exec();
    } catch (error) {
      return null;
    }
  }    

}