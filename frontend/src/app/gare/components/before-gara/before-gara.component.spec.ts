import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeGaraComponent } from './before-gara.component';

describe('BeforeGaraComponent', () => {
  let component: BeforeGaraComponent;
  let fixture: ComponentFixture<BeforeGaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeGaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeGaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
