import { TestBed } from '@angular/core/testing';

import { AthleteCompetitionService } from './athlete-competition.service';

describe('AthleteCompetitionService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: AthleteCompetitionService = TestBed.get(AthleteCompetitionService);
		expect(service).toBeTruthy();
	});
});
