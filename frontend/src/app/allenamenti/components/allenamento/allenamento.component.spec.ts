import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AllenamentoService, MockAllenamentoService } from '../../services/allenamento.service';

import { AllenamentoComponent } from './allenamento.component';

describe('AllenamentoComponent', () => {
	let component: AllenamentoComponent;
	let fixture: ComponentFixture<AllenamentoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AllenamentoComponent ],
			providers:[
				AllenamentoComponent,
				{provide: AllenamentoService, useClass: MockAllenamentoService },
				{provide: ActivatedRoute, useValue: {params: of({id: 1})} }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(AllenamentoComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
