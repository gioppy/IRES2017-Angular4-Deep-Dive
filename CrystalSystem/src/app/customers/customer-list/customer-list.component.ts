import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { ICustomers, ICustomerTeaser } from '../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customersService: CustomersService) { }

  customers: ICustomerTeaser[] = [];

  ngOnInit() {
    this.customersService.index()
      .subscribe(
        (response: ICustomers) => {
          this.customers = response.values;
        }
      );
  }

}
