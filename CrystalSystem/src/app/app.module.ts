import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BulmaModule } from './bulma/bulma.module';
import { AppRoutingModule } from './app-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CustomerRetrieveComponent } from './customers/customer-retrieve/customer-retrieve.component';
import { CustomersService } from './customers/customers.service';
import { CustomerTeaserComponent } from './customers/customer-teaser/customer-teaser.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { SystemModule } from './system/system.module';
import { AuthFakeService } from './shared/auth-fake.service';
import { AuthGuard } from './shared/auth.guard';
import { CustomerListResolve } from './customers/customer-list/customer-list.resolve';
import { CustomerRetrieveResolve } from './customers/customer-retrieve/customer-retrieve.resolve';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerCreateComponent,
    CustomerRetrieveComponent,
    CustomerTeaserComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BulmaModule,
    SystemModule
  ],
  providers: [
    CustomersService,
    AuthFakeService,
    AuthGuard,
    CustomerListResolve,
    CustomerRetrieveResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
