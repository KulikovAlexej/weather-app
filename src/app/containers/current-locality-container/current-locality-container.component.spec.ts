import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLocalityContainerComponent } from './current-locality-container.component';

describe('CurrentLocalityContainerComponent', () => {
  let component: CurrentLocalityContainerComponent;
  let fixture: ComponentFixture<CurrentLocalityContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLocalityContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLocalityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
