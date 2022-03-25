import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAtletiComponent } from './lista-atleti.component';

describe('ListaAtletiComponent', () => {
  let component: ListaAtletiComponent;
  let fixture: ComponentFixture<ListaAtletiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAtletiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAtletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
