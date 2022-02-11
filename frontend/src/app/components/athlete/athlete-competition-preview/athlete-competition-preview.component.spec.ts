import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteCompetitionPreviewComponent } from './athlete-competition-preview.component';

describe('AthleteCompetitionPreviewComponent', () => {
	let component: AthleteCompetitionPreviewComponent;
	let fixture: ComponentFixture<AthleteCompetitionPreviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AthleteCompetitionPreviewComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AthleteCompetitionPreviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
