import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockTestService, TestService } from '../../services/test.service';
import { of } from 'rxjs';

import { AnagraficaTestComponent } from './anagrafica-test.component';

describe('AnagraficaTestComponent', () => {
	let component: AnagraficaTestComponent;
	let fixture: ComponentFixture<AnagraficaTestComponent>;
	let testService:TestService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AnagraficaTestComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers:[
				AnagraficaTestComponent,
				{provide: TestService, useClass: MockTestService},
				{provide: ActivatedRoute, useValue: {params: of({id: 1})}}
			]
		})
		component = TestBed.inject(AnagraficaTestComponent);
		testService = TestBed.inject(TestService);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

