import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGareLandingComponent } from './lista-gare-landing.component';

describe('ListaGareLandingComponent', () => {
	let component: ListaGareLandingComponent;
	let fixture: ComponentFixture<ListaGareLandingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ListaGareLandingComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ListaGareLandingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
