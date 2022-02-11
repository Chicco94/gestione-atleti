import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletePreviewComponent } from './athlete-preview.component';

describe('AthletePreviewComponent', () => {
	let component: AthletePreviewComponent;
	let fixture: ComponentFixture<AthletePreviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AthletePreviewComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AthletePreviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
