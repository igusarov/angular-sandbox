import {Directive, ElementRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDcPoint]'
})
export class DcPointDirective {

  constructor(
    public viewContainerRef: ViewContainerRef,
    public elementRef: ElementRef,
  ) { }

}
