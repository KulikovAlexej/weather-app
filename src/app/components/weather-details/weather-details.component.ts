import { Component, OnInit, Input } from '@angular/core';
import { IWeatherResponse } from 'src/app/models/locality-weather.models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() weather: IWeatherResponse;
  @Input() loading: boolean;
  @Input() error: HttpErrorResponse;
  @Input() isCelsius: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
