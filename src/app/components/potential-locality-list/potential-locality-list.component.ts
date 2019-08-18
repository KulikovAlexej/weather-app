import { Component, OnInit, Input } from '@angular/core';
import { ILocality } from 'src/app/models/locality-search.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-potential-locality-list',
  templateUrl: './potential-locality-list.component.html',
  styleUrls: ['./potential-locality-list.component.scss']
})
export class PotentialLocalityListComponent implements OnInit {

  @Input() isSearching: boolean;
  @Input() localities: ILocality[];
  @Input() error: HttpErrorResponse;
  constructor() { }

  ngOnInit() {
  }

}
