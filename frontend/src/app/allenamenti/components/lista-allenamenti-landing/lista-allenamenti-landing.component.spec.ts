import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAllenamentiLandingComponent } from './lista-allenamenti-landing.component';

describe('ListaAllenamentiLandingComponent', () => {
  let component: ListaAllenamentiLandingComponent;
  let fixture: ComponentFixture<ListaAllenamentiLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAllenamentiLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAllenamentiLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
