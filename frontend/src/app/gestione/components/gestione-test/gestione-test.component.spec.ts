import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneTestComponent } from './gestione-test.component';

describe('GestioneTestComponent', () => {
  let component: GestioneTestComponent;
  let fixture: ComponentFixture<GestioneTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
