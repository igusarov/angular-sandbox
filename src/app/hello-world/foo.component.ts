import {Component} from '@angular/core';
import {FooBar} from './foobar-token';

@Component({
  selector: 'app-hello-world-foo',
  template: '<app-hello-world-bar></app-hello-world-bar>',
  providers: [
    {
      provide: FooBar,
      useValue: 'foo bar injected inside1'
    }
  ]
})
export class FooComponent {
  constructor(
    private fooService: FooBar,
  ) {
    console.log(this.fooService);
  }

}
