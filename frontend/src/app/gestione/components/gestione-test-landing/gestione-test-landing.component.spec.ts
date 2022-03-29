import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneTestLandingComponent } from './gestione-test-landing.component';

describe('GestioneTestLandingComponent', () => {
	let component: GestioneTestLandingComponent;
	let fixture: ComponentFixture<GestioneTestLandingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ GestioneTestLandingComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GestioneTestLandingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
