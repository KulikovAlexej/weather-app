import { Component, OnInit, OnDestroy } from '@angular/core';
import { OpenWeatherApiService } from 'src/app/services/open-weather-api.service';
import { LocalityStateService } from 'src/app/services/locality-state.service';
import { Observable } from 'rxjs';
import { ILocality } from 'src/app/models/locality-search.model';

@Component({
  selector: 'app-search-locality-container',
  templateUrl: './search-locality-container.component.html',
  styleUrls: ['./search-locality-container.component.scss']
})
export class SearchLocalityContainerComponent implements OnInit, OnDestroy {

  isSearching$: Observable<boolean> = this.localityStateService.isLoading$();
  localityList$: Observable<ILocality[]> = this.localityStateService.getLocalities();
  constructor(
    private weatherApiService: OpenWeatherApiService,
    private localityStateService: LocalityStateService
  ) { }

  ngOnInit() {
    this.localityStateService.getState$().subscribe(v => console.log(v));
  }

  searchLocalities(city: string) {
    this.localityStateService.setState({ loading: true, error: null, localities: [] });
    this.localityStateService.searchCity(city).subscribe(
      response => {
        this.localityStateService.setState({ loading: false, error: null, localities: response.list });
        if (!response.list.length) {
          console.log('не найдено, попробуйте другое')
        }
      },
      error => this.localityStateService.setState({ loading: false, error, localities: [] })
    );
  }

  ngOnDestroy() {
    this.localityStateService.toInitialState();
  }

}
