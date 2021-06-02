import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './Material/material.module';
import {DashboardComponent} from './Features/dashboard/dashboard.component';
import {CoinValueComponent} from './Core/coin-value/coin-value.component';
import {NewsComponent} from './Features/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CoinValueComponent,
    NewsComponent,
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
