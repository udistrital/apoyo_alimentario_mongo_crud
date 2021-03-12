import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Sintoma } from './schemas/sintoma.schema';
import { SintomaDto } from './dto/sintoma.dto';
import { FilterDto } from '../filters/dto/filter.dto';
import { FiltersService } from '../filters/filters.service';


@Injectable()
export class SintomasService {

  constructor(@InjectModel(Sintoma.name) private readonly sintomaModel: Model<Sintoma>) { }

  async post(sintomaDto: SintomaDto): Promise<Sintoma> {        
    const sintoma = new this.sintomaModel(sintomaDto);    
    sintoma.fecha_creacion = new Date();    
    sintoma.fecha_modificacion = new Date();    
    return sintoma.save();
  }

  async getAll(filterDto : FilterDto): Promise<Sintoma[]> {
    const filtersService = new FiltersService(filterDto);    
    return await this.sintomaModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
      .sort(filtersService.getSortBy())
      .exec();
  }

  async getById(id: string): Promise<Sintoma> {
    try {
      return await this.sintomaModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async put(id: string, sintomaDto: SintomaDto): Promise<Sintoma> {
    try {            
      sintomaDto.fecha_modificacion = new Date();
      await this.sintomaModel.findByIdAndUpdate(id, sintomaDto, {new: true}).exec();
      return await this.sintomaModel.findById(id).exec();
    } catch (error) {
      return null;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      return await this.sintomaModel.findByIdAndRemove(id).exec();
    } catch (error) {
      return null;
    }
  }    

}