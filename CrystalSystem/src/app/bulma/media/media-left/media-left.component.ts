import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bul-media-left',
  template: `<p [ngClass]="imageClasses"><ng-content></ng-content></p>`,
  styleUrls: ['./media-left.component.scss']
})
export class BulmaMediaLeftComponent implements OnInit {
  @Input() mediaSize: string;
  constructor() { }

  @HostBinding('class') classes = 'media-left';

  imageClasses: string[] = ['image'];

  ngOnInit() {
    this.imageClasses.push(`is-${this.mediaSize}`);
  }

}
