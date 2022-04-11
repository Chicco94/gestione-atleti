import { ActivatedRouteSnapshot, Router } from '@angular/router';

import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import { AuthenticationService } from '../services/authentication.service';

describe('LoginGuard', () => {
	let guard: LoginGuard;
	let routerSpy: jasmine.SpyObj<Router>;
	let serviceStub: Partial<AuthenticationService>;

	beforeEach(() => {
		routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']); // [1]
		serviceStub = {}; // [2]
		guard = new LoginGuard(routerSpy,serviceStub as AuthenticationService); // [3]
	  });

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
