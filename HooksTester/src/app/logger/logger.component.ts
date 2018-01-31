import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges,
  OnDestroy, OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() state: boolean;
  constructor() { }

  logs: string[] = [];

  ngOnInit() {
    this.logs.push('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.logs.push('ngOnChanges');
  }

  ngDoCheck() {
    this.logs.push('ngDoCheck');
  }

  ngAfterContentInit() {
    this.logs.push('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.logs.push('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.logs.push('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.logs.push('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.logs.push('ngOnDestroy');
  }

}
