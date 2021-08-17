import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WalletRoutingModule} from './wallet-routing.module';
import {MaterialModule} from '../../Material/material.module';
import {WalletComponent} from './components/wallet/wallet.component';


@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WalletRoutingModule
  ]
})
export class WalletModule {
}
