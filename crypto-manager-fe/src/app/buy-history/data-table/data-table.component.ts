import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IWalletData} from '../../Interfaces/iwallet-data';
import {WalletDataService} from '../../Services/wallet-data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['assetName', 'qty', 'price', 'date'];
  dataSource: IWalletData[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(){
    return this.da
  }
  constructor(private http: HttpClient, private walletService: WalletDataService) {
  }

  ngOnInit(): void {
    this.walletService.getWalletData().subscribe({
      next: data => this.dataSource = data,
      error: err => console.log(err)
    });
  }

}
