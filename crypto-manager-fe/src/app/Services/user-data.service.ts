import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {IuserAccounts} from '../interfaces/iuser-accounts';
import {concatMap, map, toArray} from 'rxjs/operators';
import {IAccountData} from '../interfaces/iaccount-data';
import {WalletDataService} from '../Features/wallet/services/wallet-data.service';
import {flatMap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  private _userData: BehaviorSubject<IAccountData[]> = new BehaviorSubject<IAccountData[]>(null);
  userData$ = this._userData.asObservable();

  constructor(private http: HttpClient, private walletDataService: WalletDataService) {
  }

  getAccountData(): void {
    setInterval(() => {
      this.http.get<IuserAccounts>('https://api.coinbase.com/v2/accounts?&limit=100')
        .pipe(
          map((data) => {
            return data.data.filter((account) => {
              return parseFloat(account.balance.amount) !== 0;
            });
          })
        ).pipe(
        flatMap((accountsData) => accountsData),
        concatMap((account) => {
          return this.walletDataService.getExchangeRates(account.currency.code).pipe(map((el: any) => {
            const currentValue = el.data.rates.EUR * parseFloat(account.balance.amount);
            const editedAccount = {...account, exchangeRate: el.data.rates.EUR, totalValue: currentValue};
            return editedAccount;
          }));
        }),
        toArray()
      ).forEach((response) => {
        this._userData.next(response);
      });
    }, 30000);
  }
}
