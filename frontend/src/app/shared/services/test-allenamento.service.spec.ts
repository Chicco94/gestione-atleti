import { TestBed } from '@angular/core/testing';

import { TestAllenamentoService } from './test-allenamento.service';

describe('TestAllenamentoService', () => {
	let service: TestAllenamentoService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TestAllenamentoService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
