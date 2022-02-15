import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAllenamentiComponent } from './lista-allenamenti.component';

describe('ListaAllenamentiComponent', () => {
  let component: ListaAllenamentiComponent;
  let fixture: ComponentFixture<ListaAllenamentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAllenamentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAllenamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
