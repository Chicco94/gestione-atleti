import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService, MockAuthenticationService } from '../../services/authentication.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let authenticationService:AuthenticationService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ LoginComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers:[
				LoginComponent,
				{provide: AuthenticationService, useClass: MockAuthenticationService}
			]
		})
		component = TestBed.inject(LoginComponent);
		authenticationService = TestBed.inject(AuthenticationService);
	
		it('should create', () => {
			expect(component).toBeTruthy();
		});
	});

	
});