import { Component, OnInit, OnDestroy } from '@angular/core';
import { OpenWeatherApiService } from 'src/app/services/open-weather-api.service';
import { LocalityStateService } from 'src/app/services/locality-state.service';
import { Observable } from 'rxjs';
import { ILocality } from 'src/app/models/locality-search.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-locality-container',
  templateUrl: './search-locality-container.component.html',
  styleUrls: ['./search-locality-container.component.scss']
})
export class SearchLocalityContainerComponent implements OnInit, OnDestroy {

  isSearching$: Observable<boolean> = this.localityStateService.isLoading$();
  localityList$: Observable<ILocality[]> = this.localityStateService.getLocalities$();
  searchingString$: Observable<string> = this.localityStateService.getSearchingString$();
  loadingError$: Observable<HttpErrorResponse> = this.localityStateService.getError$();

  constructor(
    private localityStateService: LocalityStateService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.localityStateService.getState$().subscribe(v => console.log(v));
  }

  searchLocalities(city: string) {
    this.localityStateService.setState({ loading: true, error: null, localities: [], searchingString: city });
    this.localityStateService.searchCity(city).subscribe(
      response => {
        this.localityStateService.setState({ loading: false, error: null, localities: response.list, searchingString: city });
        if (!response.list.length) {
          this.snackBar.open('No locality found. Try another request.', 'OK', {
            duration: 5000,
          });
        }
      },
      error => {
        this.localityStateService.setState({ loading: false, error, localities: [], searchingString: city });
        this.snackBar.open(`Error while searching for locations. Error: ${error.statusText}`, 'OK', {
          duration: 5000,
        });
      }
    );
  }

  ngOnDestroy() {
    // this.localityStateService.toInitialState();
  }

}
