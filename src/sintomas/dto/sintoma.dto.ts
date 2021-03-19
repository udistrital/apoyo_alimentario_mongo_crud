
import { ApiProperty} from '@nestjs/swagger';


export class SintomaDto {
  @ApiProperty()
  readonly terceroId: number;

  @ApiProperty({ type: Object, default: {} })
  readonly info_salud: Record<string, any>;

  @ApiProperty()
  readonly activo: boolean;

  @ApiProperty()
  readonly fecha_creacion: Date;
  
  @ApiProperty()
  fecha_modificacion: Date;
}
