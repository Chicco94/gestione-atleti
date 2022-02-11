import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAthleteGroupComponent } from './dialog-athlete-group.component';

describe('DialogAthleteGroupComponent', () => {
  let component: DialogAthleteGroupComponent;
  let fixture: ComponentFixture<DialogAthleteGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAthleteGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAthleteGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
