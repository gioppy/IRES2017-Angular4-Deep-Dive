import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CustomersModule } from './customers/customers.module';
import { BulmaModule } from './bulma/bulma.module';
import { SystemModule } from './system/system.module';

import { AppComponent } from './app.component';

import { CustomersService } from './customers/customers.service';
import { UtilityService } from './shared/utility.service';
import { AuthFakeService } from './shared/auth-fake.service';

import { AuthGuard } from './shared/auth.guard';
import { CustomerListResolve } from './customers/customer-list/customer-list.resolve';
import { CustomerRetrieveResolve } from './customers/customer-retrieve/customer-retrieve.resolve';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CustomersModule,
    BulmaModule,
    SystemModule
  ],
  providers: [
    CustomersService,
    AuthFakeService,
    AuthGuard,
    CustomerListResolve,
    CustomerRetrieveResolve,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
