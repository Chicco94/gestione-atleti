import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Socket } from 'ngx-socket-io';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
	let service: AuthenticationService;
	let socket: jasmine.SpyObj<Socket>;

	beforeEach(() => {
		const spy = jasmine.createSpyObj('Socket', ['emit']);
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule ],
			providers:[
				AuthenticationService,
				{provide: Socket, useValue: spy }
			]
		});
		service = TestBed.inject(AuthenticationService);
		socket = TestBed.inject(Socket) as jasmine.SpyObj<Socket>;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
