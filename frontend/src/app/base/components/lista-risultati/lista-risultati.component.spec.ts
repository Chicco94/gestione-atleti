import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRisultatiComponent } from './lista-risultati.component';

describe('ListaRisultatiComponent', () => {
  let component: ListaRisultatiComponent;
  let fixture: ComponentFixture<ListaRisultatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRisultatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRisultatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
