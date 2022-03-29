import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAllenamentoComponent } from './before-allenamento.component';

describe('BeforeAllenamentoComponent', () => {
	let component: BeforeAllenamentoComponent;
	let fixture: ComponentFixture<BeforeAllenamentoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ BeforeAllenamentoComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BeforeAllenamentoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
