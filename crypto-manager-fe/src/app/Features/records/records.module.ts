import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecordsRoutingModule} from './records-routing.module';
import {RecordsComponent} from './records/records.component';
import {MaterialModule} from '../../Material/material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    RecordsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RecordsRoutingModule,
    FormsModule
  ]
})
export class RecordsModule {
}
