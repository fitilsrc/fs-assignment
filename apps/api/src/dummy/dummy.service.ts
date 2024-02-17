import { DummyType } from '@app/shared/types/DummyType';
import { Injectable, Logger } from '@nestjs/common';
import * as dummies from '@app/shared/data/dummies.json';

@Injectable()
export class DummyService {
  dummies: DummyType[];
  constructor() {
    this.dummies = dummies
  }
  private readonly logger = new Logger(DummyService.name);

  /**
   * Return list of all dummy objects
   * @returns Promise<DummyType[]>
   */
  async getAllDummies(): Promise<DummyType[]> {
    return this.dummies;
  }
}
