import {Injectable} from '@angular/core';
import {LoginRequest, LoginResponse} from '../chat-web-socket.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>(`${environment.authServiceUrl}/v1/auth`, loginRequest);
  }

  test(): Observable<any> {
    return this.httpClient
      .post<any>(`${environment.authServiceUrl}/v1/auth/test`, {});
  }

  getIp(): Observable<any> {
    return this.httpClient.get('http://api.ipify.org/?format=json');
  }

}
