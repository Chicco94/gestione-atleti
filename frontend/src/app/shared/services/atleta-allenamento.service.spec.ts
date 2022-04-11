import { TestBed } from '@angular/core/testing';
import { Socket } from 'ngx-socket-io';

import { AtletaAllenamentoService } from './atleta-allenamento.service';

describe('AtletaAllenamentoService', () => {
	let service: AtletaAllenamentoService;
	let socket: jasmine.SpyObj<Socket>;

	beforeEach(() => {
		const spy = jasmine.createSpyObj('Socket', ['emit']);
		TestBed.configureTestingModule({
			providers:[
				AtletaAllenamentoService,
				{provide: Socket, useValue: spy }
			]
		});
		service = TestBed.inject(AtletaAllenamentoService);
		socket = TestBed.inject(Socket) as jasmine.SpyObj<Socket>;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
