import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { tap, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { WeatherStateService } from 'src/app/services/weather-state.service';
import { Subject, Observable } from 'rxjs';
import { IWeatherResponse } from 'src/app/models/locality-weather.models';

@Component({
  selector: 'app-current-locality-container',
  templateUrl: './current-locality-container.component.html',
  styleUrls: ['./current-locality-container.component.scss']
})
export class CurrentLocalityContainerComponent implements OnInit, OnDestroy {

  private destroySubject$ = new Subject<void>();
  weather$: Observable<IWeatherResponse> = this.weatherState.getWeather$();
  loading$: Observable<boolean> = this.weatherState.isLoading$();

  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherState: WeatherStateService
  ) { }

  ngOnInit() {

    this.weather$.subscribe(v => console.log(v));

    this.weatherState.getState$().subscribe(v => console.log(v));

    this.activatedRoute.paramMap
    .pipe(
      takeUntil(this.destroySubject$),
      filter(params => params.has('id')),
      map(params => params.get('id')),
      switchMap(id => this.weatherState.getWeatherByCityId(id))
    ).subscribe(
      weather => this.weatherState.setWeather(weather),
      error => this.weatherState.setError(error)
    )
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

}
