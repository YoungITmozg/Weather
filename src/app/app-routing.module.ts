import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourceComponent } from './source/source.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent},
  { path: 'source', component: SourceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
