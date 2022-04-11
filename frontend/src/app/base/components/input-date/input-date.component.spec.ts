import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseModule } from '../../base.module';
import { MaterialModule } from '../../material.module';

import { InputDateComponent } from './input-date.component';

describe('InputDateComponent', () => {
	let component: InputDateComponent;
	let fixture: ComponentFixture<InputDateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ InputDateComponent ],
			imports:[ BaseModule ],
			providers:[ InputDateComponent, ]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(InputDateComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
