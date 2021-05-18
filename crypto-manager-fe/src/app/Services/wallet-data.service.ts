import {Injectable} from '@angular/core';
import {IWalletData} from '../Interfaces/iwallet-data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletDataService {

  constructor(private http: HttpClient) {
  }

  getWalletData(): Observable<IWalletData[]> {
    return this.http.get<IWalletData[]>('assets/MOCK_DATA.json');
  }
}
