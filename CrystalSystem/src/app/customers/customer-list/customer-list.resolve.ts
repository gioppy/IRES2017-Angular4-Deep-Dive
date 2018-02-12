import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ICustomers } from '../models/customer.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CustomersService } from '../customers.service';

@Injectable()
export class CustomerListResolve implements Resolve<ICustomers> {
  constructor(private customersService: CustomersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICustomers> | Promise<ICustomers> | ICustomers {
    return this.customersService.index();
  }
}
