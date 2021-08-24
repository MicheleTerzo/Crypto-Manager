import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {IuserAccounts} from '../interfaces/iuser-accounts';
import {map} from 'rxjs/operators';
import {IAccountData} from '../interfaces/iaccount-data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  private _userData: BehaviorSubject<IAccountData[]> = new BehaviorSubject<IAccountData[]>(null);
  userData$ = this._userData.asObservable();

  constructor(private http: HttpClient) {
  }

  getAccountData(): void {
    this.http.get<IuserAccounts>('https://api.coinbase.com/v2/accounts?&limit=100')
      .pipe(
        map((data) => {
          return data.data.filter((account) => {
            return parseFloat(account.balance.amount) !== 0;
          });
        })
      )
      .forEach((response) => {
        console.log(response);
        this._userData.next(response);
      });

  }
}
