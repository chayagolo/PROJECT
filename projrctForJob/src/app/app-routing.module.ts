import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistanceResultComponent } from './components/distance-result/distance-result.component';
import { FormDistanceComponent } from './components/form-distance/form-distance.component';

const routes: Routes = [
  {
    path: '',
    component: FormDistanceComponent,
  },
  {
    path: 'form-distance',
    component: FormDistanceComponent,
  },
  {
    path: 'distance-result',
    component: DistanceResultComponent,
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
