import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthFakeService } from './auth-fake.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authFakeService: AuthFakeService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authFakeService.isAuthenticated()
      .then(
        (auth: boolean) => {
          if (auth) {
            return true;
          } else {
            this.router.navigate(['/']);
            return false;
          }
        }
      );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
