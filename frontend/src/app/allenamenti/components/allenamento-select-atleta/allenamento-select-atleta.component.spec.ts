import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenamentoSelectAtletaComponent } from './allenamento-select-atleta.component';

describe('AllenamentoSelectAtletaComponent', () => {
	let component: AllenamentoSelectAtletaComponent;
	let fixture: ComponentFixture<AllenamentoSelectAtletaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AllenamentoSelectAtletaComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AllenamentoSelectAtletaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
