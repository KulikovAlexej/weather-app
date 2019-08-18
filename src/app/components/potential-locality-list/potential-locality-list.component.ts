import { Component, OnInit, Input } from '@angular/core';
import { ILocality } from 'src/app/models/locality-search.model';

@Component({
  selector: 'app-potential-locality-list',
  templateUrl: './potential-locality-list.component.html',
  styleUrls: ['./potential-locality-list.component.scss']
})
export class PotentialLocalityListComponent implements OnInit {

  @Input() localities: ILocality[];
  constructor() { }

  ngOnInit() {
  }

}
