import { TestBed } from '@angular/core/testing';
import { Socket } from 'ngx-socket-io';

import { RisultatoService } from './risultato.service';

describe('RisultatoService', () => {
	let service: RisultatoService;
	let socket: jasmine.SpyObj<Socket>;

	beforeEach(() => {
		const spy = jasmine.createSpyObj('Socket', ['emit']);
		TestBed.configureTestingModule({
			providers:[
				RisultatoService,
				{provide: Socket, useValue: spy }
			]
		});
		service = TestBed.inject(RisultatoService);
		socket = TestBed.inject(Socket) as jasmine.SpyObj<Socket>;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
