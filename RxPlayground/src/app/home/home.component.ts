import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/bufferWhen';
import 'rxjs/add/operator/debounceTime';

import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';
import { fakeData } from '../fake-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  clickCounter: Observable<number>;
  clickCounterStatic: number;

  private customObs: Subscription;

  private numbers: number[] = [1, 3, 5, 7, 9, 11, 13];
  private fakeData = fakeData;

  @ViewChild('btn') button: ElementRef;

  ngOnInit() {
    /*const intervalObs = Observable.interval(1000)
      .map((value: number) => value * 2)
      .filter((value: number) => value % 10 === 0)
      .map((value: number) => value / 2);

    this.customObs = intervalObs.subscribe(
      (value: number) => {
        console.log(value);
      }
    );*/

    /*const myObs = Observable.create((observer: Observer<string>) => {
      setTimeout(() => observer.next('Primo valore'), 2000);
      setTimeout(() => observer.next('Secondo valore'), 4000);
      // setTimeout(() => observer.error('Errore'), 5000);
      setTimeout(() => observer.complete(), 6000);
      setTimeout(() => observer.next('Terzo valore'), 7000);
    });

    this.customObs = myObs.subscribe(
      (value: string) => {
        console.log(value);
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.info('Completed!');
      }
    );*/

    /*const arrayObs = Observable.from(this.numbers)
      .map((value: number) => value * 2);

    this.customObs = arrayObs.subscribe(
      (value: number) => console.log(value)
    );*/

    /*const fakeObs = Observable.from(this.fakeData)
      .filter((value) => value.isActive)
      .map((value) => value.name);

    const countFakeObs = fakeObs
      .count()
      .subscribe((values: number) => console.log(values))
      .unsubscribe();

    const firstLastFakeObs = fakeObs
      // .first()
      .last()
      .subscribe((values: string) => console.log(values))
      .unsubscribe();

    const takeFakeObs = fakeObs
      .take(5)
      .subscribe((values: string) => console.log(values))
      .unsubscribe();


    this.customObs = fakeObs
      .toArray()
      .subscribe(
      (value: any) => console.log(value)
    );*/

    const eventObs = Observable.fromEvent(this.button.nativeElement, 'click')
      .map((event) => 1)
      .scan((acc, value) => acc += value);
    this.clickCounter = eventObs;

    /*this.customObs = eventObs.subscribe(
      (value) => this.clickCounterStatic = value
    );*/

    const eventComplObs = Observable.fromEvent(this.button.nativeElement, 'click');
    const buffer = eventComplObs
      .bufferWhen(() => eventComplObs.debounceTime(250))
      .map((list) => list.length)
      .filter((value) => value >= 2);

    this.customObs = buffer.subscribe(
      (value) => console.log(value)
    );
  }

  ngOnDestroy() {
    this.customObs.unsubscribe();
  }

}
