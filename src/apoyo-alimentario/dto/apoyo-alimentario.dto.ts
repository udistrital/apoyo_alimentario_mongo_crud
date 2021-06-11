
import { ApiProperty } from '@nestjs/swagger';


export class ApoyoAlimentarioDto {

  @ApiProperty()
  readonly terceroId: number;

  @ApiProperty()
  readonly solicitudId: Number;

  @ApiProperty()
  readonly periodoId: Number;

  @ApiProperty()
  readonly espacioFisicoId: Number;

  @ApiProperty()
  readonly usuarioAdministrador: string;

  @ApiProperty()
  readonly activo: boolean;

  @ApiProperty()
  readonly fecha_creacion: Date;

  @ApiProperty()
  fecha_modificacion: Date;

}
