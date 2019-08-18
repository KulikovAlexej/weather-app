import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OpenWeatherApiService } from './services/open-weather-api.service';
import { WeatherStateService } from './services/weather-state.service';
import { IWeatherResponse } from './models/locality-weather.models';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  weather$: Observable<IWeatherResponse> = this.weatherState.getWeather$();
  loading$: Observable<boolean> = this.weatherState.isLoading$().pipe(delay(0)); // error view checked
  error$: Observable<HttpErrorResponse> = this.weatherState.getError$();
  isCelsius$: Observable<boolean> = this.weatherState.isCelsius$();

  constructor(
    private weatherState: WeatherStateService
  ) { }

  toggleDegrees(isCelsius: boolean) {
    this.weatherState.setCelsium(isCelsius);
  }

}
