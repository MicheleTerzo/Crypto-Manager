import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoPricesService {

  spotPricesAPI = 'https://api.coinbase.com/v2/prices/EUR/spot';

  constructor(private http: HttpClient) {
  }

  getSpotPrices(date: string): Observable<any> {
    return this.http.get<any>(this.spotPricesAPI, {
      params: {
        date
      }
    });
  }

}
