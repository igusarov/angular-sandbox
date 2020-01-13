import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @Input('appBackground') private color: string;

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseenter') private onMouseLeave() {
    this.changeBackground(this.color);
  }

  @HostListener('mouseleave') private onMouseEnter() {
    this.changeBackground(null);
  }

  private changeBackground(color: string) {
    this.elementRef.nativeElement.style.background = color;
  }

}
