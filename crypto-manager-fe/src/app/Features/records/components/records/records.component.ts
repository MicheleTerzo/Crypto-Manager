import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {RecordsDataService} from '../../Services/records-data.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit, AfterViewInit {

  @ViewChild('paginator') paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['assetName', 'qty', 'price', 'date'];

  constructor(private recordsService: RecordsDataService) {
  }

  ngOnInit(): void {
    let dataArray = [];
    this.recordsService.getRecordsData().subscribe(data => dataArray = data);
    this.dataSource = new MatTableDataSource<any>(dataArray);
    console.log(this.dataSource);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
