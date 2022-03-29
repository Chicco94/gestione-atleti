import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GareLandingComponent } from './gare-landing.component';

describe('GareLandingComponent', () => {
	let component: GareLandingComponent;
	let fixture: ComponentFixture<GareLandingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ GareLandingComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GareLandingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
