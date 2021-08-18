import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WalletRoutingModule} from './wallet-routing.module';
import {MaterialModule} from '../../Material/material.module';
import {WalletComponent} from './components/wallet/wallet.component';
import { WalletDataComponent } from './components/wallet-data/wallet-data.component';
import { WalletHistoryComponent } from './components/wallet-history/wallet-history.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    WalletComponent,
    WalletDataComponent,
    WalletHistoryComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        WalletRoutingModule,
        ChartsModule
    ]
})
export class WalletModule {
}
