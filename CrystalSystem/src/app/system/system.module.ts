import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BulmaModule } from '../bulma/bulma.module';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BulmaModule
  ],
  declarations: [
    LoginComponent,
    NotFoundComponent,
    ErrorComponent
  ]
})
export class SystemModule { }
