import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecordsRoutingModule} from './records-routing.module';
import {RecordsComponent} from './records/records.component';
import {MaterialModule} from '../../Material/material.module';


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
