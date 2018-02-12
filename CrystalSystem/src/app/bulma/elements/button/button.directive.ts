import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'a[bulButton], button[bulButton]'
})
export class ButtonDirective implements OnInit {
  @Input() bulButtonColor: string;
  @Input() bulButtonSize: string;
  @Input() bulButtonStyle: string[];
  constructor() { }

  @HostBinding('class') classes = '';

  ngOnInit() {
    const hostClasses = ['button'];

    if (this.bulButtonColor) {
      hostClasses.push(`is-${this.bulButtonColor}`);
    }

    if (this.bulButtonSize) {
      hostClasses.push(`is-${this.bulButtonSize}`);
    }

    if (this.bulButtonStyle) {
      hostClasses.push(...this.bulButtonStyle.map((value: string) => `is-${value}`));
    }

    this.classes = hostClasses.join(' ');
  }

}
