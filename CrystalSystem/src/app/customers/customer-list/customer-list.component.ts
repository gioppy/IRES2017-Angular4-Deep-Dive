import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { ICustomers, ICustomerTeaser } from '../models/customer.model';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  /*constructor(private customersService: CustomersService) { }*/
  constructor(private route: ActivatedRoute) { }

  customers: ICustomerTeaser[] = [];

  ngOnInit() {
    // NON RESOLVE
    /*this.customersService.index()
      .subscribe(
        (response: ICustomers) => {
          this.customers = response.values;
        }
      );*/

    // RESOLVE SNAPSHOT
    /*this.customers = (<ICustomers>this.route.snapshot.data['customers']).values;*/

    // RESOLVE SUBSCRIPTION
    this.route.data
      .subscribe(
        (data: Data) => {
          this.customers = (<ICustomers>data['customers']).values;
        }
      );
  }

}
