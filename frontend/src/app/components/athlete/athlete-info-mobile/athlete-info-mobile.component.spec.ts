import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteInfoMobileComponent } from './athlete-info-mobile.component';

describe('AthleteInfoMobileComponent', () => {
  let component: AthleteInfoMobileComponent;
  let fixture: ComponentFixture<AthleteInfoMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteInfoMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteInfoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
