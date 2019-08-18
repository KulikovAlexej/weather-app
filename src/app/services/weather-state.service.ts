import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IWeatherState, IWeatherResponse } from '../models/locality-weather.models';
import { map, distinctUntilChanged } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherStateService {

  initialState: IWeatherState = {
    weather: null,
    loading: false,
    error: null,
    inCelsius: true
  };

  private state = new BehaviorSubject<IWeatherState>(this.initialState);

  constructor(
    private http: HttpClient
  ) {}

  getWeatherByCityId(id: string): Observable<IWeatherResponse> {
    const params: HttpParams = new HttpParams()
    .set('id', id)
    .set('lang', 'ru')
    .set('appid', environment.apiKey);

    this.setState({ ...this.state.getValue(), loading: true, error: null });

    return this.http.get<any>(`api/weather`, { params: params })
  }

  getState$(): Observable<IWeatherState> {
    return this.state.asObservable();
  }

  setState(newState: IWeatherState): void {
    this.state.next(newState);
  }

  setWeather(weather: IWeatherResponse) {
    this.state.next({ ...this.state.getValue(), weather, loading: false, error: null });
  }

  setError(error: HttpErrorResponse) {
    this.state.next({ ...this.state.getValue(), error, loading: false, weather: null });
  }

  getWeather$(): Observable<IWeatherResponse> {
    return this.getState$().pipe(
      map(state => state.weather),
      distinctUntilChanged()
    )
  }

  isLoading$(): Observable<boolean> {
    return this.getState$().pipe(
      map(state => state.loading),
      distinctUntilChanged()
    )
  }

  getError$(): Observable<HttpErrorResponse> {
    return this.getState$().pipe(
      map(state => state.error),
      distinctUntilChanged()
    )
  }
}
