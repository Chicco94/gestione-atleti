import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AtletaAllenamentoService, MockAtletaAllenamentoService } from 'src/app/shared/services/atleta-allenamento.service';
import { AtletaService, MockAtletaService } from 'src/app/shared/services/atleta.service';

import { AllenamentoSelectAtletaComponent } from './allenamento-select-atleta.component';

describe('AllenamentoSelectAtletaComponent', () => {
	let component: AllenamentoSelectAtletaComponent;
	let fixture: ComponentFixture<AllenamentoSelectAtletaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ AllenamentoSelectAtletaComponent ],
			providers:[
				AllenamentoSelectAtletaComponent,
				{provide: AtletaService, useClass: MockAtletaService },
				{provide: AtletaAllenamentoService, useClass: MockAtletaAllenamentoService },
				{provide: ActivatedRoute, useValue: {params: of({id: 1})} }
			]
		})
		.compileComponents().then(()=>{
			fixture = TestBed.createComponent(AllenamentoSelectAtletaComponent);
			component = fixture.componentInstance;
		});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
