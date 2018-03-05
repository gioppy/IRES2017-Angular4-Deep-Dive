import { Component, ComponentRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { CustomersService } from '../customers.service';
import { ICustomer, ICustomerResponse } from '../../models/customer.model';
import { CustomerEditCanDeactivate } from './customer-edit-deactivate.guard';

import 'rxjs/add/operator/first';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit, CustomerEditCanDeactivate {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientsService: CustomersService
  ) { }

  customerForm: FormGroup;
  customer: ICustomer;

  private formChanged = false;

  ngOnInit() {
    this.customerForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.email),
      'image': new FormControl(null)
    });

    this.customer = (<ICustomerResponse>this.route.snapshot.data['customer']).values;
    this.customerForm.patchValue({
      'firstName': this.customer.firstName,
      'lastName': this.customer.lastName,
      'phoneNumber': this.customer.phoneNumber,
      'email': this.customer.email
    });

    this.customerForm.valueChanges
      .subscribe(
        () => this.formChanged = true
      );
  }

  imageFileUpdate(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.customerForm.get('image').patchValue(file);
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.formChanged) {
      return confirm('Sei sicuro di voler annullare le modifiche senza salvare?');
    } else {
      return true;
    }
  }

  updateCustomer() {
    this.clientsService.update(this.customer._id, this.customerForm.value)
      .subscribe(
        (result) => {
          this.formChanged = false;
          this.router.navigate(['../view'], { relativeTo: this.route });
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
