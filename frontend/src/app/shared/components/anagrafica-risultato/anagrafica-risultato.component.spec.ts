import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MockRisultatoService, RisultatoService } from 'src/app/allenamenti/services/risultato.service';
import { AtletaService, MockAtletaService } from '../../services/atleta.service';
import { MockTestService, TestService } from '../../services/test.service';

import { AnagraficaRisultatoComponent } from './anagrafica-risultato.component';

describe('AnagraficaRisultatoComponent', () => {
  let component: AnagraficaRisultatoComponent;
  let fixture: ComponentFixture<AnagraficaRisultatoComponent>;
  let testService:TestService;
  let atletaService:AtletaService;
  let risultatoService:RisultatoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagraficaRisultatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
	TestBed.configureTestingModule({
		providers:[
			AnagraficaRisultatoComponent,
			{provide: AtletaService, useClass: MockAtletaService},
			{provide: TestService, useClass: MockTestService},
			{provide: RisultatoService, useClass: MockRisultatoService},
			{provide: ActivatedRoute, useValue: {params: of({idrisultato: 1,idgara:1})}}
		]
	})
	component = TestBed.inject(AnagraficaRisultatoComponent);
	testService = TestBed.inject(TestService);
	atletaService = TestBed.inject(AtletaService);
	risultatoService = TestBed.inject(RisultatoService);
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
