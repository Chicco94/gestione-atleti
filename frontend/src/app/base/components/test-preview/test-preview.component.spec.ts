import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseModule } from '../../base.module';
import { MaterialModule } from '../../material.module';

import { TestPreviewComponent } from './test-preview.component';

describe('TestPreviewComponent', () => {
	let component: TestPreviewComponent;
	let fixture: ComponentFixture<TestPreviewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ TestPreviewComponent ],
			imports:[ BaseModule ],
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestPreviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
