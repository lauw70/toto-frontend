import { Component, OnInit } from '@angular/core';
import {GlobalVarsService} from '../../../services/global-vars.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  title: string;

  constructor(private _globalVarsService: GlobalVarsService) {
    this._globalVarsService.pageTitle.subscribe(value => this.title = value);
  }

  ngOnInit() {
  }

}
