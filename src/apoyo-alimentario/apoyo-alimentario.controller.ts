import { Query,Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException} from '@nestjs/common';
import { ApoyoAlimentarioService } from './apoyo-alimentario.service';
import { ApiTags } from '@nestjs/swagger';
import { ApoyoAlimentarioDto } from './dto/apoyo-alimentario.dto';
import { FilterDto} from '../filters/dto/filter.dto';



@ApiTags('apoyo_alimentario')
@Controller('apoyo_alimentario')
export class ApoyoAlimentarioController {

  constructor(private readonly apoyoAlimentarioService: ApoyoAlimentarioService) { }

  @Post()
  async post(@Res() res, @Body() apoyoAlimentarioDto: ApoyoAlimentarioDto) {
    const apoyoAlimentario = await this.apoyoAlimentarioService.post(apoyoAlimentarioDto)
    return res.status(HttpStatus.OK).json({
      Data: apoyoAlimentario,
      Message: "Registration successfull",
      Status: "201",
      Success: true
    });
  }

  @Get()
  async getAll(@Res() res, @Query() filterDto: FilterDto) {
    const apoyoAlimentario = await this.apoyoAlimentarioService.getAll(filterDto);
    return res.status(HttpStatus.OK).json({
      Data: apoyoAlimentario,
      Message: "Request successfull",
      Status: "200",
      Success: true
    });
  }

  @Get('/:id')
  async getById(@Res() res, @Param('id') id: string) {
    const apoyoAlimentario = await this.apoyoAlimentarioService.getById(id);
    if (!apoyoAlimentario) throw new NotFoundException("not found resource");
    return res.status(HttpStatus.OK).json({
      Data: apoyoAlimentario,
      Message: "Request successfull",
      Status: "200",
      Success: true
    });
  }

  @Put('/:id')
  async put(@Res() res, @Param('id') id: string, @Body() apoyoAlimentarioDto: ApoyoAlimentarioDto) {
    const apoyoAlimentario = await this.apoyoAlimentarioService.put(id, apoyoAlimentarioDto);
    if (!apoyoAlimentario) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({
      Data: apoyoAlimentario,
      Message: "Update successfull",
      Status: "200",
      Success: true
    });
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const apoyoAlimentario = await this.apoyoAlimentarioService.delete(id);
    if (!apoyoAlimentario) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({
      Data: {
        _id: id
      },
      Message: "Delete successfull",
      Status: "200",
      Success: true
    });
  }
}