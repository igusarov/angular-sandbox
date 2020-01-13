import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyStructural]'
})
export class MyStructuralDirective {
  @Input('appMyStructuralOf') private set appMyStructuralOf(items) {
    items.forEach((item, index) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {$implicit: item, index, doubleIndex: index * 2});
    });
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.viewContainer.createEmbeddedView(this.templateRef);
    // console.log(this.arr);
  }

}

