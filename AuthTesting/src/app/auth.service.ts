import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  private auth;

  login(username: string, password: string): Observable<any> {
    const payload = {
      username: username,
      password: password
    };

    return this.http.post(`http://localhost:3000/users/login`, payload)
      .do((data: any) => {
        this.saveSession(data.values);
      });
  }

  logout() {
    this.destroySession();
    // this.router.navigate(['']);
  }

  refresh(): Observable<any> {
    const payload = {
      refresh: this.auth.refresh_token
    };

    return this.http.post(`http://localhost:3000/users/login/refresh`, payload)
      .do((data: any) => {
        this.saveSession(data.values);
      })
      .catch((error) => {
        this.destroySession();
        return Observable.throw(error);
      });
  }

  getAuth() {
    const accessToken = sessionStorage.getItem('access_token');
    const refreshToken = sessionStorage.getItem('refresh_token');

    if (accessToken && refreshToken) {
      this.auth = {
        access_token: accessToken,
        refresh_token: refreshToken
      };
    } else {
      this.auth = null;
    }

    return this.auth;
  }

  private saveSession(data) {
    this.auth = data;
    sessionStorage.setItem('access_token', data.access_token);
    sessionStorage.setItem('refresh_token', data.refresh_token);
  }

  private destroySession() {
    this.auth = null;
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
  }

}
