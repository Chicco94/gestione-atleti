import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneAtletiComponent } from './gestione-atleti.component';

describe('GestioneAtletiComponent', () => {
  let component: GestioneAtletiComponent;
  let fixture: ComponentFixture<GestioneAtletiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneAtletiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneAtletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
