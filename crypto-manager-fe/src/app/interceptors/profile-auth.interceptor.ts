import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import hmacSHA256 from 'crypto-js/hmac-sha256';
import Hex from 'crypto-js/enc-hex';


@Injectable()
export class ProfileAuthInterceptor implements HttpInterceptor {


  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const key = environment.api_key;
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const modifiedRequest = request.clone({
      headers: request.headers.set('CB-ACCESS-KEY', key)
        .set('CB-ACCESS-SIGN', this.generateSign(timestamp, request.method, request.url))
        .set('CB-ACCESS-TIMESTAMP', timestamp)
        .set('CB-VERSION', ' 2019-12-03 ')
    });
    return next.handle(modifiedRequest);
  }

  private generateSign(timestamp: string, method: string, url: string, body?): string {
    let message = '';
    url = url.replace('https://api.coinbase.com', '');

    if (body) {
      message = timestamp + method + url + body;
    } else {
      message = timestamp + method + url;
    }

    const bytes = hmacSHA256(message, environment.api_secret);
    const eMessage = bytes.toString(Hex);

    return eMessage;
  }
}
