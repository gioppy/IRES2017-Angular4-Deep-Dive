import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
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
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SystemRoutingModule { }
