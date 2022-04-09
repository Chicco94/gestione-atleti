import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AllenamentoService, MockAllenamentoService } from '../../services/allenamento.service';
import { MockRisultatoService, RisultatoService } from '../../services/risultato.service';

import { AllenamentoAttivoComponent } from './allenamento-attivo.component';

describe('AllenamentoAttivoComponent', () => {
	let component: AllenamentoAttivoComponent;
	let fixture: ComponentFixture<AllenamentoAttivoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AllenamentoAttivoComponent ],
			providers:[
				AllenamentoAttivoComponent,
				{provide: AllenamentoService, useClass: MockAllenamentoService },
				{provide: RisultatoService, useClass: MockRisultatoService },
				{provide: ActivatedRoute, useValue: {params: of({id: 1})} }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(AllenamentoAttivoComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
