import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoggerComponent } from './logger/logger.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent,
    LogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
