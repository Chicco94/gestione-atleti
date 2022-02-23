import { TestBed } from '@angular/core/testing';

import { AtletaTrainingService } from './athlete-training.service';

describe('AtletaTrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtletaTrainingService = TestBed.get(AtletaTrainingService);
    expect(service).toBeTruthy();
  });
});
