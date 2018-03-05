import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SystemRoutingModule } from './system-routing.module';
import { BulmaModule } from '../bulma/bulma.module';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SystemRoutingModule,
    BulmaModule
  ],
  declarations: [
    LoginComponent,
    NotFoundComponent,
    ErrorComponent
  ]
})
export class SystemModule { }
