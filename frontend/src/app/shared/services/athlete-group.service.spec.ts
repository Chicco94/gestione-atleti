import { TestBed } from '@angular/core/testing';

import { AthleteGroupService } from './athlete-group.service';

describe('AthleteGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthleteGroupService = TestBed.get(AthleteGroupService);
    expect(service).toBeTruthy();
  });
});
