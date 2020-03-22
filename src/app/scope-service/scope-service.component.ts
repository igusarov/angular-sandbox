import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../shared-data.service';

@Component({
  selector: 'app-scope-service',
  templateUrl: './scope-service.component.html',
  styleUrls: ['./scope-service.component.scss'],
  providers: [
    SharedDataService,
  ]
})
export class ScopeServiceComponent implements OnInit {
  public data;
  constructor(
    private sharedDataService: SharedDataService,
  ) {
    this.sharedDataService.someData$.subscribe((data) => this.data = data);
    this.sharedDataService.someData$.next('I am separate flow!');
  }

  ngOnInit() {
  }

}
