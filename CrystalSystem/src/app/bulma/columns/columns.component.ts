import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bul-columns',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent {

  constructor() { }

  @HostBinding('class') classes = 'columns';

}
