import { TestBed } from '@angular/core/testing';

import { AtletaCompetitionService } from './athlete-competition.service';

describe('AtletaCompetitionService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: AtletaCompetitionService = TestBed.get(AtletaCompetitionService);
		expect(service).toBeTruthy();
	});
});
