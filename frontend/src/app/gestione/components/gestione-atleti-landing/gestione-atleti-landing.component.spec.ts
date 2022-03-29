import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneAtletiLandingComponent } from './gestione-atleti-landing.component';

describe('GestioneAtletiLandingComponent', () => {
	let component: GestioneAtletiLandingComponent;
	let fixture: ComponentFixture<GestioneAtletiLandingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ GestioneAtletiLandingComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GestioneAtletiLandingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
