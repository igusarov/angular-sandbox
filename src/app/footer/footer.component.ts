import {Component, Input, OnChanges, OnInit, SimpleChange, ViewEncapsulation} from '@angular/core';
import {SharedDataService} from '../shared-data.service';

function myClassDecorator(constructor: any) {
  console.log('class decorator:', constructor.prototype.constructor);
};

@myClassDecorator
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FooterComponent implements OnInit, OnChanges {
  static HELLO: 'hello';
  @Input() foo: string;
  private bar_: string;
  public someField = 'some filed';
  constructor(
    public sharedService: SharedDataService,
  ) { }

  @Input()
  set bar(value) {
    this.bar_ = value + ' intercepdted footer text!';
  }

  get bar() {
    return this.bar_;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    //console.log(changes);
  }

}
