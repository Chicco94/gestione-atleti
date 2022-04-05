import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaraLandingComponent } from './gara-landing.component';

describe('GaraLandingComponent', () => {
	let component: GaraLandingComponent;
	let fixture: ComponentFixture<GaraLandingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ GaraLandingComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GaraLandingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
