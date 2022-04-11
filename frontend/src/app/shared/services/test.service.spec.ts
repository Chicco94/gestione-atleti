import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Socket } from 'ngx-socket-io';

import { TestService } from './test.service';

describe('TestService', () => {
	let service: TestService;
	let socket: jasmine.SpyObj<Socket>;

	beforeEach(() => {
		const spy = jasmine.createSpyObj('Socket', ['emit']);
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			providers:[
				TestService,
				{provide: Socket, useValue: spy }
			]
		});
		service = TestBed.inject(TestService);
		socket = TestBed.inject(Socket) as jasmine.SpyObj<Socket>;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
