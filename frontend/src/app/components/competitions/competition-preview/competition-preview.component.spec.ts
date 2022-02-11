import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionPreviewComponent } from './competition-preview.component';

describe('CompetitionPreviewComponent', () => {
  let component: CompetitionPreviewComponent;
  let fixture: ComponentFixture<CompetitionPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
