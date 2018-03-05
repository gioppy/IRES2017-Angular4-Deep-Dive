import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'bul-media-content',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./media-content.component.scss']
})
export class BulmaMediaContentComponent implements OnInit {

  constructor() { }

  @HostBinding('class') classes = 'media-content';

  ngOnInit() {
  }

}
