import { Component } from '@angular/core';
import { OpenWeatherApiService } from './services/open-weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService: OpenWeatherApiService) {}
  title = 'weather-app';
  
  ngOnInit() {
    // this.apiService.getCurrentWeather().subscribe(v => console.log(v));

    // this.apiService.getRes().subscribe(v => console.log(v));

    // this.apiService.searchCity('moscow').subscribe(v => console.log(v));
  }
}
