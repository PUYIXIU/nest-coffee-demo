import { Test, TestingModule } from '@nestjs/testing';
import { CakeController } from './cake.controller';

describe('CakeController', () => {
  let controller: CakeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CakeController],
    }).compile();

    controller = module.get<CakeController>(CakeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
