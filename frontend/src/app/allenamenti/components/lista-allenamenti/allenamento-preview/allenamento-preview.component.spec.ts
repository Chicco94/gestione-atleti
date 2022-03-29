import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenamentoPreviewComponent } from './allenamento-preview.component';

describe('AllenamentoPreviewComponent', () => {
	let component: AllenamentoPreviewComponent;
	let fixture: ComponentFixture<AllenamentoPreviewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AllenamentoPreviewComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AllenamentoPreviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
