import {Component, OnInit} from '@angular/core';
import {UserDataService} from '../../../../Services/user-data.service';
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


  constructor(private userDataService: UserDataService, private walletDataService: WalletDataService) {
  }

  ngOnInit(): void {
    this.accountData = this.userDataService.userData$.pipe(map((accountsData) => {
      this.walletValue = 0;
      if (accountsData) {
        accountsData.forEach(account => {
          this.walletValue += account.totalValue;
        });
      }
      return accountsData;
    }));
    this.userDataService.getAccountData();
  }
}
