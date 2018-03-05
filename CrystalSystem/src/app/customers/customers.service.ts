import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { ICustomerResponse, ICustomers } from './models/customer.model';
import { UtilityService } from '../shared/utility.service';

@Injectable()
export class CustomersService {

  constructor(private http: HttpClient, private utilityService: UtilityService) { }

  index(): Observable<ICustomers> {
    return this.http.get<ICustomers>(`${environment.apiHost}/customers`);
  }

  retrieve(cid: string): Observable<ICustomerResponse> {
    return this.http.get<ICustomerResponse>(`${environment.apiHost}/customers/${cid}`);
  }

  create(payload): Observable<any> {
    return this.http.post(`${environment.apiHost}/customers`, payload);
  }

  update(id: string, values): Observable<any> {
    // const payload = this.utilityService.fromValuesToPayload(values);
    const payload = this.utilityService.fromValuesToFormData(values);
    return this.http.patch(`${environment.apiHost}/customers/${id}`, payload);
  }

}
