import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSideComponent } from './input-side.component';

describe('InputSideComponent', () => {
  let component: InputSideComponent;
  let fixture: ComponentFixture<InputSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
