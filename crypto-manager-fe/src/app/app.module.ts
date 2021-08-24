import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './Material/material.module';
import {DashboardComponent} from './Features/dashboard/dashboard.component';
import {SharedModule} from './shared/shared.module';
import {ChartsModule} from 'ng2-charts';
import {ProfileAuthInterceptor} from './interceptors/profile-auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ChartsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ProfileAuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
