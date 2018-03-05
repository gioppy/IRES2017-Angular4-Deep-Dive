import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { BulmaModule } from '../bulma/bulma.module';

import { CustomerEditDeactivateGuard } from './customer-edit/customer-edit-deactivate.guard';
import { CustomerListResolve } from './customer-list/customer-list.resolve';
import { CustomerRetrieveResolve } from './customer-retrieve/customer-retrieve.resolve';

import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerTeaserComponent } from './customer-teaser/customer-teaser.component';
import { CustomerRetrieveComponent } from './customer-retrieve/customer-retrieve.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BulmaModule
  ],
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    CustomerTeaserComponent,
    CustomerRetrieveComponent,
    CustomerEditComponent,
    CustomerCreateComponent
  ],
  providers: [
    CustomerEditDeactivateGuard,
    CustomerListResolve,
    CustomerRetrieveResolve
  ]
})
export class CustomersModule { }
