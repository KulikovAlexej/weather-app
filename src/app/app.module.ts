import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchLocalityComponent } from './components/search-locality/search-locality.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { DegreesToggleComponent } from './components/degrees-toggle/degrees-toggle.component';
import { CurrentLocalityComponent } from './components/current-locality/current-locality.component';
import { PotentialLocalityListComponent } from './potential-locality-list/potential-locality-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchLocalityComponent,
    WeatherDetailsComponent,
    DegreesToggleComponent,
    CurrentLocalityComponent,
    PotentialLocalityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
