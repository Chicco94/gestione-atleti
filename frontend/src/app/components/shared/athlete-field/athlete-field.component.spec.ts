import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteFieldComponent } from './athlete-field.component';

describe('AthleteFieldComponent', () => {
  let component: AthleteFieldComponent;
  let fixture: ComponentFixture<AthleteFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
