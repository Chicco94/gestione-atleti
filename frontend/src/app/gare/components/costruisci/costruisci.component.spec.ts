import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostruisciComponent } from './costruisci.component';

describe('CostruisciComponent', () => {
	let component: CostruisciComponent;
	let fixture: ComponentFixture<CostruisciComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ CostruisciComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CostruisciComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
