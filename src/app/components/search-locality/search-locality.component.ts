import { Component, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-locality',
  templateUrl: './search-locality.component.html',
  styleUrls: ['./search-locality.component.scss']
})
export class SearchLocalityComponent {

  @Input() isSearching: boolean;
  @Output() searchLocalities = new EventEmitter<string>();
  private city = new FormControl('', Validators.required);

  constructor() { }


  onSearchLocalities() {
    const city: string = this.city.value.toLowerCase();
    const invalid = this.city.invalid;
    if(invalid) return;

    this.searchLocalities.emit(city);
  }

}
