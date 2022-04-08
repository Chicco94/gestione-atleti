import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTimeComponent } from './input-time.component';

describe('InputTimeComponent', () => {
	let component: InputTimeComponent;
	let fixture: ComponentFixture<InputTimeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ InputTimeComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InputTimeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	// L'avvio o lo stop del timer modifica il valore di timer_started
	it('#timer() should toggle #timer_started', () => {
		const comp = new InputTimeComponent();
		expect(comp.timer_started)
			.withContext('off at first')
			.toBe(false);
		comp.timer();
		expect(comp.timer_started)
			.withContext('on after click')
			.toBe(true);
		comp.timer();
		expect(comp.timer_started)
			.withContext('stopped after second click')
			.toBe(false)
	});

	// L'avvio o lo stop del timer modifica il valore di model
	it('#clicked() should set #model', () => {
		const comp = new InputTimeComponent();
		comp.timer();
		delay(2000);
		comp.timer();
		expect(comp.model)
		  .withContext('stopped after second click')
		  .toMatch(/2.d+/);
		  comp.timer();
		  delay(4500);
		  comp.timer();
		  expect(comp.model)
			.withContext('stopped after second click')
			.toMatch(/4.5d+/);
	  });

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	function delay(ms: number) {
		return new Promise( resolve => setTimeout(resolve, ms) );
	}
});
