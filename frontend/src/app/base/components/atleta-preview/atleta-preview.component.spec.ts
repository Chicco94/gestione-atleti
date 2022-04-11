import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseModule } from '../../base.module';
import { MaterialModule } from '../../material.module';

import { AtletaPreviewComponent } from './atleta-preview.component';

describe('AtletaPreviewComponent', () => {
	let component: AtletaPreviewComponent;
	let fixture: ComponentFixture<AtletaPreviewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AtletaPreviewComponent ],
			imports:[ BaseModule ],
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AtletaPreviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
