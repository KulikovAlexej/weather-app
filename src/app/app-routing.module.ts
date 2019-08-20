import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLocalityContainerComponent } from './containers/search-locality-container/search-locality-container.component';
import { CurrentLocalityContainerComponent } from './containers/current-locality-container/current-locality-container.component';


const routes: Routes = [
  { path: 'search', component: SearchLocalityContainerComponent },
  { path: 'locality/:id', component: CurrentLocalityContainerComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '**', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
