import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {IuserAccounts} from '../../../interfaces/iuser-accounts';
import {concatMap, map, tap, toArray} from 'rxjs/operators';
import {flatMap} from 'rxjs/internal/operators';
import {IAccountData} from '../../../interfaces/iaccount-data';


@Injectable({
  providedIn: 'root'
})
export class WalletDataService {

  private _userData: BehaviorSubject<IAccountData[]> = new BehaviorSubject<IAccountData[]>(null);
  userData$ = this._userData.asObservable();
  private _transactionsData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  transactioinData$ = this._transactionsData.asObservable();
  private _pristineAccountData: BehaviorSubject<IAccountData[]> = new BehaviorSubject<IAccountData[]>([]);
  pristineAccountData$ = this._pristineAccountData.asObservable();

  constructor(private http: HttpClient) {
  }

  /**
   * Recupera i dati relativi ai vari wallet e li filtra in base alla quantità di crypto posseduta.
   * Aggiunge anche il valore di scambio della singola unità utilizzando getExchangeRates
   */
  getAccountData(): void {
    this.http.get<IuserAccounts>('https://api.coinbase.com/v2/accounts?&limit=100')
      .pipe(
        tap((value) => {
          if (value.data !== this._pristineAccountData.value && this._pristineAccountData.value.length === 0) {
            this._pristineAccountData.next(value.data);
          }
        }),
        map((data) => {
          return data.data.filter((account) => {
            return parseFloat(account.balance.amount) !== 0;
          });
        })
      ).pipe(
      flatMap((accountsData) => accountsData),
      concatMap((account) => {
        return this.getExchangeRates(account.currency.code).pipe(map((el: any) => {
          const currentValue = el.data.rates.EUR * parseFloat(account.balance.amount);
          const editedAccount = {...account, exchangeRate: el.data.rates.EUR, totalValue: currentValue};
          return editedAccount;
        }));
      }),
      toArray()
    ).forEach((response) => {
      this._userData.next(response);
      this.updateAccountData();
    });
  }

  /**
   * Recupera il valore unitario di una moneta specifica
   * @param currency la stringa con il codice della coin
   */
  getExchangeRates(currency: string): Observable<any> {
    return this.http.get('https://api.coinbase.com/v2/exchange-rates', {
      params: {
        currency
      }
    });
  }


  /**
   * Recupera tutte le transazioni relative all'account corrente
   */
  getTransactions(): void {
    this.pristineAccountData$.forEach((data) => {
      data.forEach((el) => {
        this.http.get(`https://api.coinbase.com/v2/accounts/${el.id}/transactions`).forEach((transactions: any) => {
          const transactionsList = this._transactionsData.value;
          if (transactions.data.length !== 0) {
            transactionsList.push(transactions.data);
          }
          this._transactionsData.next(transactionsList);
        });
      });
    });
  }


  /**
   * Si occupa di aggiornare i dati ogni minuto
   * @private
   */
  private updateAccountData(): void {
    setTimeout(() => {
      this.getAccountData();
    }, 60000);
  }

}
