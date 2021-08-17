import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MaterialModule} from '../Material/material.module';


@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ]
})
export class SharedModule {
}
