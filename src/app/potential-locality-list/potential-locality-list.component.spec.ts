import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialLocalityListComponent } from './potential-locality-list.component';

describe('PotentialLocalityListComponent', () => {
  let component: PotentialLocalityListComponent;
  let fixture: ComponentFixture<PotentialLocalityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialLocalityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialLocalityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
