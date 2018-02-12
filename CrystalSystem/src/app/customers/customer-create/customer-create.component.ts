import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  constructor(private customersService: CustomersService, private router: Router) { }

  customerForm: FormGroup;

  ngOnInit() {
    this.customerForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  saveCustomer() {
    const payload = {
      'firstName': this.customerForm.get('firstName').value,
      'lastName': this.customerForm.get('lastName').value,
      'phoneNumber': this.customerForm.get('phoneNumber').value,
      'email': this.customerForm.get('email').value
    };
    // salva il cliente
    this.customersService.create(payload)
      .subscribe(
        (result) => {
          this.router.navigate(['/customers']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
