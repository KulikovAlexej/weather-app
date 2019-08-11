import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { tap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-current-locality-container',
  templateUrl: './current-locality-container.component.html',
  styleUrls: ['./current-locality-container.component.scss']
})
export class CurrentLocalityContainerComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap
    .pipe(
      filter(params => params.has('id')),
      map(params => params.get('id')),
      map(str => Number(str))
    ).subscribe(v => console.log('lala', v))
  }

  ngOnDestroy() {
    
  }

}
