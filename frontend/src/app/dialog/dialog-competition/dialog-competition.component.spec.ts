import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCompetitionComponent } from './dialog-competition.component';

describe('DialogCompetitionComponent', () => {
  let component: DialogCompetitionComponent;
  let fixture: ComponentFixture<DialogCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
