import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLocalityComponent } from './search-locality.component';

describe('SearchLocalityComponent', () => {
  let component: SearchLocalityComponent;
  let fixture: ComponentFixture<SearchLocalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLocalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLocalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
