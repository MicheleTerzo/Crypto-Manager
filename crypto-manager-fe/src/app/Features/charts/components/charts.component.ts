import {Component, OnInit} from '@angular/core';
import {CryptoPricesService} from '../../../Services/crypto-prices.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  spotPrice: Observable<any>;

  constructor(private cryptoService: CryptoPricesService) {
  }

  ngOnInit(): void {
    this.spotPrice = this.cryptoService.getSpotPrices(this.formatDate());
  }

  date(): void {
    console.log(this.formatDate());
  }

  formatDate(): string {
    const currentDate = Date.now();
    const d = new Date(currentDate);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }
}
