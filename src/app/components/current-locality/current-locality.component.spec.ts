import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLocalityComponent } from './current-locality.component';

describe('CurrentLocalityComponent', () => {
  let component: CurrentLocalityComponent;
  let fixture: ComponentFixture<CurrentLocalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLocalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLocalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
