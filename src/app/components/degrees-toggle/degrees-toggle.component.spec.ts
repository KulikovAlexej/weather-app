import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesToggleComponent } from './degrees-toggle.component';

describe('DegreesToggleComponent', () => {
  let component: DegreesToggleComponent;
  let fixture: ComponentFixture<DegreesToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreesToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreesToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
