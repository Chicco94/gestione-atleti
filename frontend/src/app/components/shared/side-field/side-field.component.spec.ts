import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFieldComponent } from './side-field.component';

describe('SideFieldComponent', () => {
  let component: SideFieldComponent;
  let fixture: ComponentFixture<SideFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
