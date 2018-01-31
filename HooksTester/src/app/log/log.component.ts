import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  template: `<p>{{ message }}</p>`,
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
