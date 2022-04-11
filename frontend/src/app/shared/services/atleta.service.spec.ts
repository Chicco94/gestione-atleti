import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Socket } from 'ngx-socket-io';

import { AtletaService } from './atleta.service';

describe('AtletaService', () => {
	let service: AtletaService;
	let socket: jasmine.SpyObj<Socket>;

	beforeEach(() => {
		const spy = jasmine.createSpyObj('Socket', ['emit']);
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			providers:[
				AtletaService,
				{provide: Socket, useValue: spy }
			]
		});
		service = TestBed.inject(AtletaService);
		socket = TestBed.inject(Socket) as jasmine.SpyObj<Socket>;
	});

	it('should be created', () => {
		const service: AtletaService = TestBed.get(AtletaService);
		expect(service).toBeTruthy();
	});
});
