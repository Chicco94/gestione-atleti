import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSexComponent } from './input-sex.component';

describe('InputSexComponent', () => {
	let component: InputSexComponent;
	let fixture: ComponentFixture<InputSexComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ InputSexComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InputSexComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
