import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaraPreviewComponent } from './gara-preview.component';

describe('GaraPreviewComponent', () => {
  let component: GaraPreviewComponent;
  let fixture: ComponentFixture<GaraPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaraPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaraPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
