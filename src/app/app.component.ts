import {Component, ComponentFactoryResolver, ElementRef, Injector, ViewChild} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {FooterComponent} from './footer/footer.component';
import {SharedDataService} from './shared-data.service';
import {DcPointDirective} from './dc-point.directive';
import {FooComponent} from './foo/foo.component';
import {FormControl} from '@angular/forms';
import {FooBar} from './hello-world/foobar-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('footerRef', {static: false})
  private footer: FooterComponent;

  @ViewChild('dcPoint', {static: false})
  private dcPoint: ElementRef;

  items: any[] = ['a', 'b', 'c'];
  title = 'my-app';
  test = 'hallo!';
  someObject = {
    a: 1,
    b: 2,
  };
  course = 12;
  reactiveInput: FormControl = new FormControl('');
  constructor(
    private sharedData: SharedDataService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private fooBar: FooBar,
  ) {

    const customFooComponent = createCustomElement(FooComponent, {injector});
    customElements.define('my-custom-foo', customFooComponent);

    console.log(this.fooBar);

    setTimeout(() => {
      this.test = 'hello world!';
    }, 1000);

    setTimeout(() => {
      this.title = 'my-app1';
    }, 2000);

    setTimeout(() => {
      this.items = [...this.items, 'd'];
    }, 3000);

    this.sharedData.someData$.subscribe((data) => {
      this.test = data;
    });

    setTimeout(() => {
      this.reactiveInput.setValue('hello!');
    }, 1000);
  }

  addComponent() {
    const myElement = document.createElement('my-custom-foo') as any;
    console.log(this.dcPoint);
    this.dcPoint.nativeElement.appendChild(myElement);

    let i = 0;
    setInterval(() => {
      i++;
      myElement.data = i.toString();
    }, 1000);
  }

  changeFooter() {
    this.footer.someField = 'new text!';
    this.sharedData.someData$.next('changed data!');
  }
}
