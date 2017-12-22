import { Component, OnInit } from '@angular/core';
import {GlobalVarsService} from '../../../services/global-vars.service';
import {MatchService} from '../../../services/match.service';
import {ActivatedRoute} from '@angular/router';
import {Match} from '../../../services/match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  match: Match;

  constructor(private _globalVarsService: GlobalVarsService,
              private _matchService: MatchService,
              private _route: ActivatedRoute) {
    this._globalVarsService.pageTitle.next('Uitslag');
    this._route.params.subscribe(res => this.displayMatch(res.id));
  }

  ngOnInit() {
  }

  displayMatch(matchId: string) {
    this.match = this._matchService.getMatch(matchId, true);
  }

}
