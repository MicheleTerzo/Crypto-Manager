import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-coin-value',
  templateUrl: './coin-value.component.html',
  styleUrls: ['./coin-value.component.scss']
})
export class CoinValueComponent implements OnInit {

  coinValue = [
    {
      name: 'Bitcoin',
      value: 15.02
    },
    {
      name: 'Dogecoin',
      value: 3.02
    },
    {
      name: 'Ethereum',
      value: -3.5
    },
    {
      name: 'Stellar',
      value: -0.5
    },
    {
      name: 'Compound',
      value: -2.07
    },
    {
      name: 'Litecoin',
      value: 10
    },
    {
      name: 'TheGraph',
      value: 2
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
