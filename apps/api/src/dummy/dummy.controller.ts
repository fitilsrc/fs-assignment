import { Controller, Get } from '@nestjs/common';
import { DummyService } from './dummy.service';

@Controller('dummy')
export class DummyController {
  constructor(private readonly dummyService: DummyService) {}

  @Get('/')
  getAllDummies() {
    return this.dummyService.getAllDummies();
  }
}
