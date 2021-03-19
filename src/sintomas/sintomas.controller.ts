import { Query,Controller, Res, Post, Get, Put, Delete, Param, Body, HttpStatus, NotFoundException} from '@nestjs/common';
import { SintomasService } from './sintomas.service';
import { ApiTags } from '@nestjs/swagger';
import { SintomaDto } from './dto/sintoma.dto';
import { FilterDto} from '../filters/dto/filter.dto';



@ApiTags('sintomas')
@Controller('sintomas')
export class SintomasController {

  constructor(private readonly sintomasService: SintomasService) { }

  @Post()
  async post(@Res() res, @Body() sintomaDto: SintomaDto) {
    const sintoma = await this.sintomasService.post(sintomaDto)
    return res.status(HttpStatus.OK).json({
      Data: sintoma,
      Message: "Registration successfull",
      Status: "201",
      Success: true
    });
  }

  @Get()
  async getAll(@Res() res, @Query() filterDto: FilterDto) {
    const sintomas = await this.sintomasService.getAll(filterDto);
    return res.status(HttpStatus.OK).json({
      Data: sintomas,
      Message: "Request successfull",
      Status: "200",
      Success: true
    });
  }

  @Get('/:id')
  async getById(@Res() res, @Param('id') id: string) {
    const sintoma = await this.sintomasService.getById(id);
    if (!sintoma) throw new NotFoundException("not found resource");
    return res.status(HttpStatus.OK).json({
      Data: sintoma,
      Message: "Request successfull",
      Status: "200",
      Success: true
    });
  }

  @Put('/:id')
  async put(@Res() res, @Param('id') id: string, @Body() sintomaDto: SintomaDto) {
    const sintoma = await this.sintomasService.put(id, sintomaDto);
    if (!sintoma) throw new NotFoundException("not found resource");    
    return res.status(HttpStatus.OK).json({
      Data: sintoma,
      Message: "Update successfull",
      Status: "200",
      Success: true
    });
  }

  @Delete('/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const sintoma = await this.sintomasService.delete(id);
    if (!sintoma) throw new NotFoundException("not found resource");    
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