import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'bul-media-right',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./media-right.component.scss']
})
export class BulmaMediaRightComponent implements OnInit {

  constructor() { }

  @HostBinding('class') classes = 'media-right';

  ngOnInit() {
  }

}
