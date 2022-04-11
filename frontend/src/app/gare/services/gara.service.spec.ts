import { TestBed } from '@angular/core/testing';
import { Socket } from 'ngx-socket-io';
import { AllenamentoService } from 'src/app/allenamenti/services/allenamento.service';

import { GaraService } from './gara.service';

describe('GaraService', () => {
	let service: GaraService;
	let allenamentoService: jasmine.SpyObj<AllenamentoService>;

	beforeEach(() => {
		const spy = jasmine.createSpyObj('AllenamentoService', ['addAllenamento','buildAllenamento','updateAllenamento','deleteAllenamento','getAllenamento']);
		TestBed.configureTestingModule({
			providers:[
				GaraService,
				{provide: Socket, useValue: spy }
			]
		});
		service = TestBed.inject(GaraService);
		allenamentoService = TestBed.inject(AllenamentoService) as jasmine.SpyObj<AllenamentoService>;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
