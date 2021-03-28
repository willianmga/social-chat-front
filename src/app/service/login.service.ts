import {Injectable} from '@angular/core';
import {AuthServerResponse, LoginRequest, LoginResponse} from './web-socket-chat-server.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export interface IpifyResponse {
  ip: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>(`${environment.authServiceUrl}/v1/auth`, loginRequest);
  }

  logoff(): Observable<AuthServerResponse> {
    return this.httpClient
      .post<AuthServerResponse>(`${environment.authServiceUrl}/v1/auth/logoff`, {});
  }

  getIp(): Observable<IpifyResponse> {
    return this.httpClient
      .get<IpifyResponse>('https://api.my-ip.io/ip.json');
  }

}
