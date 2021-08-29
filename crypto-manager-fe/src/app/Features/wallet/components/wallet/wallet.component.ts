import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {WalletDataService} from '../../services/wallet-data.service';
import {IAccountData} from '../../../../interfaces/iaccount-data';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-records',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  accountData: Observable<IAccountData[]>;
  walletValue = 0;
  transactionsList: Observable<any> = this.walletDataService.transactioinData$;


  constructor(private walletDataService: WalletDataService) {
  }

  ngOnInit(): void {
    this.accountData = this.walletDataService.userData$.pipe(map((accountsData) => {
      this.walletValue = 0;
      if (accountsData) {
        accountsData.forEach(account => {
          this.walletValue += account.totalValue;
        });
      }
      return accountsData;
    }));
    this.walletDataService.getAccountData();
  }

}
