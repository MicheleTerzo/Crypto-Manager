import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './Features/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'wallet', loadChildren: () => import('./Features/wallet/wallet.module').then(m => m.WalletModule)},
  {path: 'charts', loadChildren: () => import('./Features/charts/charts.module').then(m => m.ChartsModule)},
  {path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
