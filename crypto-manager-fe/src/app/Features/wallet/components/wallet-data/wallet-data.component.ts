import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IAccountData} from '../../../../interfaces/iaccount-data';

@Component({
  selector: 'app-wallet-data',
  templateUrl: './wallet-data.component.html',
  styleUrls: ['./wallet-data.component.scss']
})
export class WalletDataComponent implements OnInit, OnChanges {

  @Input() accountsData: IAccountData[] = [];
  accountsDataCache: IAccountData[] = [];
  @Input() walletValue = 0;
  walletValueCache = 0;

  constructor() {
  }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.accountsData && changes.accountsData) {
      if (changes.accountsData.previousValue) {
        this.accountsDataCache = changes.accountsData.previousValue;
      }
    }
    if (this.walletValue && changes.walletValue) {
      if (changes.walletValue.previousValue) {
        this.walletValueCache = changes.walletValue.previousValue;
      }
    }
  }

}
