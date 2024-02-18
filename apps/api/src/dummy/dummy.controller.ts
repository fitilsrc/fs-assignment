import { Controller, Get, UseGuards } from '@nestjs/common';
import { DummyService } from './dummy.service';
import { DummyType } from '@app/shared/types/DummyType';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('dummy')
export class DummyController {
  constructor(private readonly dummyService: DummyService) {}

  @UseGuards(JwtGuard)
  @Get('/')
  async getAllDummies(): Promise<DummyType[]> {
    return await this.dummyService.getAllDummies();
  }
}
