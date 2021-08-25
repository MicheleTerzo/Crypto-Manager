import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WalletDataService {

  private _exchangerates: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  exchangeRates$ = this._exchangerates.asObservable();


  constructor(private http: HttpClient) {
  }

  // getExchangeRates(currency: string): void {
  //   this.http.get('https://api.coinbase.com/v2/exchange-rates', {
  //     params: {
  //       currency
  //     }
  //   }).forEach((element: any) => {
  //     const list = this._exchangerates.value;
  //     if (!list.includes(element.data.currency)) {
  //       list.push({
  //         currency: element.data.currency,
  //         EUR: element.data.rates.EUR
  //       });
  //       this._exchangerates.next(list);
  //     }
  //   });
  // }
  getExchangeRates(currency: string): Observable<any> {
    return this.http.get('https://api.coinbase.com/v2/exchange-rates', {
      params: {
        currency
      }
    });
  }

}
