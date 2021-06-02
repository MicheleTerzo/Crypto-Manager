import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecordsRoutingModule} from './records-routing.module';
import {MaterialModule} from '../../Material/material.module';
import {RecordsComponent} from './components/records/records.component';


@NgModule({
  declarations: [
    RecordsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RecordsRoutingModule
  ]
})
export class RecordsModule {
}
