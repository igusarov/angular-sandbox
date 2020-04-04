import {Component} from '@angular/core';
import {FooBar} from './foobar-token';

@Component({
  selector: 'app-hello-world-bar',
  template: 'hello world bar!',
})
export class BarComponent {
  constructor(
    private fooService: FooBar,
  ) {
    console.log('app-hello-world-bar', this.fooService);
  }

}
