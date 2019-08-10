import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  
  searchCity(city: string) {
    return this.http.get(`
    api/find?q=${city}&sort=population&appid=cb30165fbee1109708d696ef9dfffd36&lang=ru
    `)
  }

  getWeatherByCoords(lon: number, lat: number) {
    return this.http.get(`api/`)
  }
}

// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=cb30165fbee1109708d696ef9dfffd36