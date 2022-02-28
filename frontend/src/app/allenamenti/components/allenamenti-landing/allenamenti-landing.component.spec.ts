import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenamentiLandingComponent } from './allenamenti-landing.component';

describe('AllenamentiLandingComponent', () => {
  let component: AllenamentiLandingComponent;
  let fixture: ComponentFixture<AllenamentiLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllenamentiLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllenamentiLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
