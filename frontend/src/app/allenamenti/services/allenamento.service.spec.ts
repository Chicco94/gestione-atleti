import { TestBed } from '@angular/core/testing';
import { Socket } from 'ngx-socket-io';

import { AllenamentoService } from './allenamento.service';

describe('AllenamentoService', () => {
	let service: AllenamentoService;
	let socket: jasmine.SpyObj<Socket>;

	beforeEach(() => {
		const spy = jasmine.createSpyObj('Socket', ['emit']);
		TestBed.configureTestingModule({
			providers:[
				AllenamentoService,
				{provide: Socket, useValue: spy }
			]
		});
		service = TestBed.inject(AllenamentoService);
		socket = TestBed.inject(Socket) as jasmine.SpyObj<Socket>;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
