import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './system/login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerListResolve } from './customers/customer-list/customer-list.resolve';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CustomerRetrieveComponent } from './customers/customer-retrieve/customer-retrieve.component';
import { ErrorComponent } from './system/error/error.component';
import { CustomerRetrieveResolve } from './customers/customer-retrieve/customer-retrieve.resolve';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  // Questi path sono stati esportati nel modulo customers-routing.module
  /*{
    path: 'customers',
    component: CustomersComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      { path: '', component: CustomerListComponent, resolve: {
        customers: CustomerListResolve
      }
      },
      { path: 'add', component: CustomerCreateComponent },
      { path: ':cid/view', component: CustomerRetrieveComponent, resolve: {
        customer: CustomerRetrieveResolve
      } }
    ]
  },*/
  /*{
    path: '404',
    // component: NotFoundComponent
    component: ErrorComponent,
    data: {
      message: 'Page not found'
    }
  },
  {
    path: '403',
    component: ErrorComponent,
    data: {
      message: 'Access denied'
    }
  },
  {
    path: '**',
    redirectTo: '/404'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
