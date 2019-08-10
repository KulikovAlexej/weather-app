import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-current-locality-container',
  templateUrl: './current-locality-container.component.html',
  styleUrls: ['./current-locality-container.component.scss']
})
export class CurrentLocalityContainerComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .pipe(
      tap(par => console.log(par))
      // filter((params: Params) => params.has('id'))
    )
    .subscribe()
  }

}
