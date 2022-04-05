import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaRisultatoComponent } from './anagrafica-risultato.component';

describe('AnagraficaRisultatoComponent', () => {
  let component: AnagraficaRisultatoComponent;
  let fixture: ComponentFixture<AnagraficaRisultatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagraficaRisultatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagraficaRisultatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
