import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


import { AppComponent } from './app.component';
import { SearchLocalityComponent } from './components/search-locality/search-locality.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { DegreesToggleComponent } from './components/degrees-toggle/degrees-toggle.component';
import { CurrentLocalityComponent } from './components/current-locality/current-locality.component';
import { PotentialLocalityListComponent } from './components/potential-locality-list/potential-locality-list.component';
import { SearchLocalityContainerComponent } from './containers/search-locality-container/search-locality-container.component';
import { CurrentLocalityContainerComponent } from './containers/current-locality-container/current-locality-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchLocalityComponent,
    WeatherDetailsComponent,
    DegreesToggleComponent,
    CurrentLocalityComponent,
    PotentialLocalityListComponent,
    SearchLocalityContainerComponent,
    CurrentLocalityContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
