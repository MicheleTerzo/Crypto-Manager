import {Component, OnInit} from '@angular/core';
import {UserDataService} from '../../../../Services/user-data.service';
import {Observable} from 'rxjs';
import {WalletDataService} from '../../services/wallet-data.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-records',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  accountData: Observable<any>;
  rates: Observable<{ currency: string, EUR: number }[]>;


  constructor(private userDataService: UserDataService, private walletDataService: WalletDataService) {
  }

  ngOnInit(): void {
    this.accountData = this.userDataService.userData$.pipe(
      map((accountsData) => {
        if (accountsData) {
          accountsData.forEach((crypto) => {
            this.walletDataService.getExchangeRates(crypto.currency.code);
          });
        }
        return accountsData;
      }),
    );
    this.userDataService.getAccountData();
    this.rates = this.walletDataService.exchangeRates$;
  }


//   flatMap((docs) => docs),
//   concatMap((doc) => {
//   return this.keycloakGroupService.getUserById(doc.author)
// .pipe(map((user) => {
//   doc.author = user.username;
//   return doc;
// }));
// }),
// toArray(),

}
