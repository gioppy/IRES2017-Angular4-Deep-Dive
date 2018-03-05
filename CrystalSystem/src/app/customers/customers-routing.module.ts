import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerRetrieveComponent } from './customer-retrieve/customer-retrieve.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

import { CustomerEditDeactivateGuard } from './customer-edit/customer-edit-deactivate.guard';
import { CustomerListResolve } from './customer-list/customer-list.resolve';
import { CustomerRetrieveResolve } from './customer-retrieve/customer-retrieve.resolve';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      { path: '', component: CustomerListComponent, resolve: { customers: CustomerListResolve } },
      { path: 'add', component: CustomerCreateComponent },
      { path: ':cid/view', component: CustomerRetrieveComponent, resolve: { customer: CustomerRetrieveResolve } },
      {
        path: ':cid/edit',
        component: CustomerEditComponent,
        canDeactivate: [ CustomerEditDeactivateGuard ],
        resolve: { customer: CustomerRetrieveResolve }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CustomersRoutingModule { }
