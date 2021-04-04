import {Injectable} from '@angular/core';
import {AuthenticationResponse} from './web-socket-chat-server.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export interface SignUpRequest {
  username: string;
  password: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) {}

  signup(name: string, username: string, password: string): Observable<AuthenticationResponse> {

    const signUpRequest: SignUpRequest = {
        name,
        username,
        password
    };

    return this.httpClient
      .post<AuthenticationResponse>(`${environment.authServiceUrl}/v1/signup`, signUpRequest)
  }

}
