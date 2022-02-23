import { TestBed } from '@angular/core/testing';

import { AtletaGroupService } from './athlete-group.service';

describe('AtletaGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtletaGroupService = TestBed.get(AtletaGroupService);
    expect(service).toBeTruthy();
  });
});
