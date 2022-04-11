import { TestBed } from '@angular/core/testing';
import { Socket } from 'ngx-socket-io';

import { TestAllenamentoService } from './test-allenamento.service';

describe('TestAllenamentoService', () => {
	let service: TestAllenamentoService;
	let socket: jasmine.SpyObj<Socket>;

	beforeEach(() => {
		const spy = jasmine.createSpyObj('Socket', ['emit']);
		TestBed.configureTestingModule({
			providers:[
				TestAllenamentoService,
				{provide: Socket, useValue: spy }
			]
		});
		service = TestBed.inject(TestAllenamentoService);
		socket = TestBed.inject(Socket) as jasmine.SpyObj<Socket>;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
