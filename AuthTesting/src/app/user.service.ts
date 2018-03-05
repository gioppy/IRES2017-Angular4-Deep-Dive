import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  index(): Observable<any> {
    return this.http.get(`http://localhost:3000/users`);
  }

  retrieve(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users/${id}`);
  }

}
