import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GareggiaComponent } from './gareggia.component';

describe('GareggiaComponent', () => {
	let component: GareggiaComponent;
	let fixture: ComponentFixture<GareggiaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ GareggiaComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GareggiaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
