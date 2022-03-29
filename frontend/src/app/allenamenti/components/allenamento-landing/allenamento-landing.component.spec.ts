import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenamentoLandingComponent } from './allenamento-landing.component';

describe('AllenamentoLandingComponent', () => {
	let component: AllenamentoLandingComponent;
	let fixture: ComponentFixture<AllenamentoLandingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AllenamentoLandingComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AllenamentoLandingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
