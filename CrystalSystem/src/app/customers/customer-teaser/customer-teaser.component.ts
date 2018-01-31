import { Component, Input, OnInit } from '@angular/core';
import { ICustomerTeaser } from '../models/customer.model';

@Component({
  selector: 'app-customer-teaser',
  templateUrl: './customer-teaser.component.html',
  styleUrls: ['./customer-teaser.component.css']
})
export class CustomerTeaserComponent implements OnInit {
  @Input() settings: ICustomerTeaser;
  constructor() { }

  ngOnInit() {
  }

}
