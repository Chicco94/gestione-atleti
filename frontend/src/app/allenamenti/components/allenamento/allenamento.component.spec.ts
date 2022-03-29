import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenamentoComponent } from './allenamento.component';

describe('AllenamentoComponent', () => {
	let component: AllenamentoComponent;
	let fixture: ComponentFixture<AllenamentoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AllenamentoComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AllenamentoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
