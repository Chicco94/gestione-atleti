import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAthleteComponent } from './dialog-athlete.component';

describe('DialogAthleteComponent', () => {
  let component: DialogAthleteComponent;
  let fixture: ComponentFixture<DialogAthleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAthleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
