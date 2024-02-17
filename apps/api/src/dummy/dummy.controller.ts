import { Controller, Get } from '@nestjs/common';
import { DummyService } from './dummy.service';
import { DummyType } from '@app/shared/types/DummyType';

@Controller('dummy')
export class DummyController {
  constructor(private readonly dummyService: DummyService) {}

  @Get('/')
  async getAllDummies(): Promise<DummyType[]> {
    return await this.dummyService.getAllDummies();
  }
}
