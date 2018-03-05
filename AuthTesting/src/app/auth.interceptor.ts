import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  private authService;
  private refreshTokenInProgress = false;

  private tokenRefreshedSource: Subject<any> = new Subject();
  tokenRefreshed = this.tokenRefreshedSource.asObservable();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.injector.get(AuthService);

    request = this.addAuthHeader(request);

    // console.log(request);
    return next.handle(request)
      .catch((error) => {
        // Missing token
        if (error.status === 401 && error.error.code === 'missing_token') {
          // redirect to login page
          return Observable.throw(error);
        }

        // Token expired
        if (error.status === 401 && error.error.code === 'expired_token') {
          return this.refreshToken()
            .switchMap(() => {
              request = this.addAuthHeader(request);
              return next.handle(request);
            })
            .catch(() => {
              // logout

              return Observable.empty();
            });
        }

        return Observable.throw(error);
      });
  }

  refreshToken() {
    if (this.refreshTokenInProgress) {
      // Il refresh è in atto!
      return new Observable((observer) => {
        this.tokenRefreshed.subscribe(
          () => {
            observer.next();
            observer.complete();
          }
        );
      });
    } else {
      // Il refresh va fatto!
      this.refreshTokenInProgress = true;
      return this.authService.refresh()
        .do(() => {
          this.refreshTokenInProgress = false;
          this.tokenRefreshedSource.next();
        });
    }
  }

  addAuthHeader(request) {
    const tokens = this.authService.getAuth();

    if (tokens) {
      return request.clone({
        headers: request.headers.set('Authorization', `Bearer ${tokens.access_token}`)
      });
    }

    return request;
  }
}
