import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseModule } from '../../base.module';
import { MaterialModule } from '../../material.module';

import { InputNumberComponent } from './input-number.component';

describe('InputNumberComponent', () => {
	let component: InputNumberComponent;
	let fixture: ComponentFixture<InputNumberComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ InputNumberComponent ],
			imports:[ BaseModule ],
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InputNumberComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
