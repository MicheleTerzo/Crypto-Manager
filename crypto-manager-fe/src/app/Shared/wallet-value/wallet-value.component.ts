import {Component, OnInit} from '@angular/core';
import {RecordsDataService} from '../../Services/records-data.service';
import {IWalletData} from '../../Interfaces/iwallet-data';

@Component({
  selector: 'app-wallet-value',
  templateUrl: './wallet-value.component.html',
  styleUrls: ['./wallet-value.component.scss']
})
export class WalletValueComponent implements OnInit {

  balance = [];
  constructor(private recordsService: RecordsDataService) {
  }

  ngOnInit(): void {
    this.recordsService.getRecordsData().subscribe(data => this.filterByName(data));
  }

  filterByName(data: IWalletData[]): void {
    const grouped = Array.from(
      data.reduce(
        (m, {name, price}) => m.set(name, (m.get(name) || 0) + price),
        new Map()
      ).entries(),
      ([name, price]) => ({name, price})
    );
    console.log(grouped);
    this.balance = grouped;
  }
}
