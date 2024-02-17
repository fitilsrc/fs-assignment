import { DummyType } from '@app/shared/types/DummyType';
import { Injectable, Logger } from '@nestjs/common';
import dummies from '@app/shared/data/dummies.json';

@Injectable()
export class DummyService {
  private readonly logger = new Logger(DummyService.name);

  /**
   * Return list of all dummy objects
   * @returns Promise<DummyType[]>
   */
  async getAllDummies(): Promise<DummyType[]> {
    return dummies;
  }
}
