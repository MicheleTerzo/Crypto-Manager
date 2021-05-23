import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RecordsDataService} from '../../../Services/records-data.service';
import {Subscription} from 'rxjs';
import {IWalletData} from '../../../Interfaces/iwallet-data';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit, OnDestroy {

  // Colonne da visualizzare
  displayedColumns: string[] = ['name', 'qty', 'price', 'date'];

  // Subscriptions
  recordsDataSub: Subscription;

  // Dati da visualizzare
  data: MatTableDataSource<IWalletData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private recordsService: RecordsDataService) {
  }

  ngOnInit(): void {
    this.recordsDataSub = this.recordsService.getRecordsData().subscribe(
      data => {
        this.data = new MatTableDataSource<IWalletData>(data);
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
      },
      err => console.log(err)
    );
  }

  ngOnDestroy(): void {
    this.recordsDataSub.unsubscribe();
  }

}
