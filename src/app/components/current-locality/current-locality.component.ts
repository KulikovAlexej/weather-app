import { Component, OnInit, Input } from '@angular/core';
import { IWeather } from 'src/app/models/shared.models';
import { IWeatherResponse } from 'src/app/models/locality-weather.models';

@Component({
  selector: 'app-current-locality',
  templateUrl: './current-locality.component.html',
  styleUrls: ['./current-locality.component.scss']
})
export class CurrentLocalityComponent implements OnInit {
  @Input() weather: IWeatherResponse;
  @Input() loading: boolean;
  constructor() { }

  ngOnInit() {
  }

}
