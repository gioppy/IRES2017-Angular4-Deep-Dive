import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { HighchartComponent } from './highchart/highchart.component';

@NgModule({
  declarations: [
    AppComponent,
    HighchartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
