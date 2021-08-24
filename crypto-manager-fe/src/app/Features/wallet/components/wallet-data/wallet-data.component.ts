import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {IAccountData} from '../../../../interfaces/iaccount-data';

@Component({
  selector: 'app-wallet-data',
  templateUrl: './wallet-data.component.html',
  styleUrls: ['./wallet-data.component.scss']
})
export class WalletDataComponent implements OnInit {

  @Input() accountsData: IAccountData[] = [];
  @Input() rates: any[];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'line';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    {data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
