import { TestBed } from '@angular/core/testing';
import { Base } from '../models/base.model';

import { BaseService } from './base.service';

describe('BaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseService<Base> = TestBed.get(BaseService);
    expect(service).toBeTruthy();
  });
});
