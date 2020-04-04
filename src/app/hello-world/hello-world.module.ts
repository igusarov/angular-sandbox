import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooComponent} from './foo.component';
import {FooBar} from './foobar-token';
import {BarComponent} from './bar.component';

@NgModule({
  providers: [
    {
      provide: FooBar,
      useValue: 'provider from chiled!',
    }
  ],
  declarations: [
    FooComponent,
    BarComponent,
  ],
  exports: [
    FooComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HelloWorldModule { }
