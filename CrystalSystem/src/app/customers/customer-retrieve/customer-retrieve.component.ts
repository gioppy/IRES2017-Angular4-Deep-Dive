import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { CustomersService } from '../customers.service';
import { ICustomer, ICustomerResponse } from '../models/customer.model';

@Component({
  selector: 'app-customer-retrieve',
  templateUrl: './customer-retrieve.component.html',
  styleUrls: ['./customer-retrieve.component.css']
})
export class CustomerRetrieveComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customersService: CustomersService
  ) { }

  customer: ICustomer;

  ngOnInit() {
    this.route.params
      .switchMap((params) => this.customersService.retrieve(params.cid))
      /*.map((customer) => customer.values.firstName + ' ' + customer.values.lastName)*/
      .subscribe(
        (customer: ICustomerResponse) => this.customer = customer.values,
        (error) => {
          this.router.navigate(['/customers']);
        }
      );
    /*this.route.params
      .subscribe(
        (params) => {
          this.customersService.retrieve(params.cid)
            .subscribe(
              (value) => {
                console.log(value);
              }
            );
        }
      );*/
  }

}
