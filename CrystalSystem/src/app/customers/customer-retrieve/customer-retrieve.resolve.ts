import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ICustomerResponse } from '../models/customer.model';
import { CustomersService } from '../customers.service';

@Injectable()
export class CustomerRetrieveResolve implements Resolve<ICustomerResponse> {
  constructor(private customersService: CustomersService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICustomerResponse> | Promise<ICustomerResponse> | ICustomerResponse {
    /*console.log(route);
    console.log(state);*/
    return this.customersService.retrieve(route.params['cid'])
      .catch((error) => {
        if (error.status === 0) {
          this.router.navigate(['/']);
        }
        return Observable.throw(error);
      });
  }
}
