import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalVarsService {

  pageTitle: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

}
