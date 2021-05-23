import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IWalletData} from '../Interfaces/iwallet-data';

@Injectable({
  providedIn: 'root'
})
export class RecordsDataService {

  constructor(private http: HttpClient) {
  }

  getRecordsData(): Observable<IWalletData[]> {
    return this.http.get<IWalletData[]>('assets/MOCK_DATA.json');
  }
}
