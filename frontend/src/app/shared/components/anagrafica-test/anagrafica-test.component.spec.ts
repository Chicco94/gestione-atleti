import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaTestComponent } from './anagrafica-test.component';

describe('AnagraficaTestComponent', () => {
	let component: AnagraficaTestComponent;
	let fixture: ComponentFixture<AnagraficaTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AnagraficaTestComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AnagraficaTestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
