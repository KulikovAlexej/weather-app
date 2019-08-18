import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ILocalityList } from '../models/locality-search.models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherApiService {

  constructor(
    private http: HttpClient
  ) { }

  // необходимые апишки:
  // поиск городов
  // получение погоды для города по id
  // получение погоды по текущим координатам

  getCurrentWeather(): Observable<any> {
    return this.http.get(`
    weather-api/data/2.5/weather?id=524901&APPID=cb30165fbee1109708d696ef9dfffd36`
    )
  }

  getRes(): Observable<any> {
    return this.http.get(`
    api/forecast?id=524901&APPID=cb30165fbee1109708d696ef9dfffd36
    `)
  }
  
  searchCity(city: string): Observable<ILocalityList> {
    const params: HttpParams = new HttpParams()
    .set('q', city)
    .set('sort', 'population')
    .set('appid', environment.apiKey)
    .set('lang', 'ru');

    return this.http.get<ILocalityList>(`api/find`, { params: params })
  }

  getWeatherByCoords(lon: number, lat: number) {
    return this.http.get(`api/`)
  }
}

// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=cb30165fbee1109708d696ef9dfffd36