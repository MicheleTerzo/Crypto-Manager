import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WalletComponent} from './wallet/wallet.component';
import {BuyHistoryComponent} from './buy-history/buy-history.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'buy-history', component: BuyHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
