import { TestBed } from '@angular/core/testing';

import { AthleteTrainingService } from './athlete-training.service';

describe('AthleteTrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthleteTrainingService = TestBed.get(AthleteTrainingService);
    expect(service).toBeTruthy();
  });
});
