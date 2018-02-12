import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bul-column',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input() colSize: number;
  @Input() colOffset: number;
  constructor() { }

  @HostBinding('class') classes = '';

  ngOnInit() {
    const hostClass = ['column'];

    if (this.colSize) {
      hostClass.push(`is-${this.colSize}`);
    }

    if (this.colOffset) {
      hostClass.push(`is-offset-${this.colOffset}`);
    }

    this.classes = hostClass.join(' ');
  }

}
