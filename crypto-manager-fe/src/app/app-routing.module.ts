import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './Features/dashboard/dashboard.component';
import {NewsComponent} from './Features/news/news.component';

const routes: Routes = [
  {path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Records', loadChildren: () => import('./Features/records/records.module').then(m => m.RecordsModule)},
  {path: 'Charts', loadChildren: () => import('./Features/charts/charts.module').then(m => m.ChartsModule)},
  {path: 'News', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
