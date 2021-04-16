import { Test, TestingModule } from '@nestjs/testing';
import { ApoyoAlimentarioController } from './apoyo-alimentario.controller';

describe('ApoyoAlimentarioController', () => {
  let controller: ApoyoAlimentarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApoyoAlimentarioController],
    }).compile();

    controller = module.get<ApoyoAlimentarioController>(ApoyoAlimentarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
