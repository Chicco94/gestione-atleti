import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityFieldComponent } from './speciality-field.component';

describe('SpecialityFieldComponent', () => {
  let component: SpecialityFieldComponent;
  let fixture: ComponentFixture<SpecialityFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialityFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
