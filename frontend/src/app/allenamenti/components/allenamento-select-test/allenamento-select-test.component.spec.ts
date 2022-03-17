import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenamentoSelectTestComponent } from './allenamento-select-test.component';

describe('AllenamentoSelectTestComponent', () => {
  let component: AllenamentoSelectTestComponent;
  let fixture: ComponentFixture<AllenamentoSelectTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllenamentoSelectTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllenamentoSelectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
