import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLocalityContainerComponent } from './search-locality-container.component';

describe('SearchLocalityContainerComponent', () => {
  let component: SearchLocalityContainerComponent;
  let fixture: ComponentFixture<SearchLocalityContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLocalityContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLocalityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
