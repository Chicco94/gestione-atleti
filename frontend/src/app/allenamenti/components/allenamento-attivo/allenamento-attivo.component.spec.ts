import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenamentoAttivoComponent } from './allenamento-attivo.component';

describe('AllenamentoAttivoComponent', () => {
  let component: AllenamentoAttivoComponent;
  let fixture: ComponentFixture<AllenamentoAttivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllenamentoAttivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllenamentoAttivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
