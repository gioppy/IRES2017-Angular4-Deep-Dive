import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CustomerRetrieveComponent } from './customers/customer-retrieve/customer-retrieve.component';
import { CustomersService } from './customers/customers.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerTeaserComponent } from './customers/customer-teaser/customer-teaser.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      { path: 'all', component: CustomerListComponent },
      { path: 'add', component: CustomerCreateComponent },
      { path: ':cid/view', component: CustomerRetrieveComponent }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    NotFoundComponent,
    CustomerCreateComponent,
    CustomerRetrieveComponent,
    CustomerTeaserComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
