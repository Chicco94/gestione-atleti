import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteGroupPreviewComponent } from './athlete-group-preview.component';

describe('AthleteGroupPreviewComponent', () => {
  let component: AthleteGroupPreviewComponent;
  let fixture: ComponentFixture<AthleteGroupPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteGroupPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteGroupPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
