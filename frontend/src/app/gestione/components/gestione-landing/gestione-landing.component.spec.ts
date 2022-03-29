import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneLandingComponent } from './gestione-landing.component';

describe('GestioneLandingComponent', () => {
	let component: GestioneLandingComponent;
	let fixture: ComponentFixture<GestioneLandingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ GestioneLandingComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GestioneLandingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
