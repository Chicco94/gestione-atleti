import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaAtletaComponent } from './anagrafica-atleta.component';

describe('AnagraficaAtletaComponent', () => {
  let component: AnagraficaAtletaComponent;
  let fixture: ComponentFixture<AnagraficaAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagraficaAtletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagraficaAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
