import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './Material/material.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {WalletComponent} from './wallet/wallet.component';
import {BuyHistoryComponent} from './buy-history/buy-history.component';
import { DataTableComponent } from './buy-history/data-table/data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    WalletComponent,
    BuyHistoryComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
