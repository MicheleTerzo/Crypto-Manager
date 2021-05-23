import {Component, OnInit} from '@angular/core';
import {RecordsDataService} from '../../../Services/records-data.service';
import {Observable} from 'rxjs';
import {IWalletData} from '../../../Interfaces/iwallet-data';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  recordsData$: Observable<IWalletData[]>;
  displayedColumns: string[] = ['assetName', 'qty', 'price', 'date'];

  constructor(private recordsService: RecordsDataService) {
  }

  ngOnInit(): void {
    this.recordsData$ = this.recordsService.getRecordsData();
  }

}
