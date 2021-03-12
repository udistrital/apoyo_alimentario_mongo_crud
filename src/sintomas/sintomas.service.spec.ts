import { Test, TestingModule } from '@nestjs/testing';
import { SintomasService } from './sintomas.service';

describe('SintomasService', () => {
  let service: SintomasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SintomasService],
    }).compile();

    service = module.get<SintomasService>(SintomasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
