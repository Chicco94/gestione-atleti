import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MockTestAllenamentoService, TestAllenamentoService } from 'src/app/shared/services/test-allenamento.service';
import { MockTestService, TestService } from 'src/app/shared/services/test.service';

import { AllenamentoSelectTestComponent } from './allenamento-select-test.component';

describe('AllenamentoSelectTestComponent', () => {
	let component: AllenamentoSelectTestComponent;
	let fixture: ComponentFixture<AllenamentoSelectTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AllenamentoSelectTestComponent ],
			providers:[
				AllenamentoSelectTestComponent,
				{provide: TestAllenamentoService, useClass: MockTestAllenamentoService },
				{provide: TestService, useClass: MockTestService },
				{provide: ActivatedRoute, useValue: {params: of({id: 1})} }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(AllenamentoSelectTestComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
