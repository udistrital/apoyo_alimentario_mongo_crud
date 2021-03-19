import { Test, TestingModule } from '@nestjs/testing';
import { SintomasController } from './sintomas.controller';

describe('SintomasController', () => {
  let controller: SintomasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SintomasController],
    }).compile();

    controller = module.get<SintomasController>(SintomasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
