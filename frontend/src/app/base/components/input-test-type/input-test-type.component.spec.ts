import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTestTypeComponent } from './input-test-type.component';

describe('InputTestTypeComponent', () => {
	let component: InputTestTypeComponent;
	let fixture: ComponentFixture<InputTestTypeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ InputTestTypeComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InputTestTypeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
