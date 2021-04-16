import { Test, TestingModule } from '@nestjs/testing';
import { ApoyoAlimentarioService } from './apoyo-alimentario.service';

describe('ApoyoAlimentarioService', () => {
  let service: ApoyoAlimentarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApoyoAlimentarioService],
    }).compile();

    service = module.get<ApoyoAlimentarioService>(ApoyoAlimentarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
