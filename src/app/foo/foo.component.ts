import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {
  @Input() data: string;
  constructor() { }

  ngOnInit() {
  }

}
