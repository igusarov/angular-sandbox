import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class SharedDataService {
  public someData$: BehaviorSubject<string> = new BehaviorSubject('hello world');
  constructor() { }
}
