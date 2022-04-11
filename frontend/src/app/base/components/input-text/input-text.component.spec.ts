import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseModule } from '../../base.module';
import { MaterialModule } from '../../material.module';

import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
	let component: InputTextComponent;
	let fixture: ComponentFixture<InputTextComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ InputTextComponent ],
			imports:[ BaseModule ],
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InputTextComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
