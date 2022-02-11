import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAthleteCompetitionComponent } from './dialog-athlete-competition.component';

describe('DialogAthleteCompetitionComponent', () => {
  let component: DialogAthleteCompetitionComponent;
  let fixture: ComponentFixture<DialogAthleteCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAthleteCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAthleteCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
