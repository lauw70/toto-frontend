import { Component, OnInit } from '@angular/core';
import {GlobalVarsService} from '../../../services/global-vars.service';
import {MatchService} from '../../../services/match.service';
import {Match} from '../../../services/match';
import {TeamService} from '../../../services/team.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private _globalVarsService: GlobalVarsService,
              private _matchService: MatchService,
              private _teamService: TeamService) {
    this._globalVarsService.pageTitle.next('Wedstrijden');
  }

  ngOnInit() {
  }

  getPoints(match: Match): number {
    if (match.played) {
      if (match.outcome_self.score === match.outcome_enemy.score) return 1;
      else if (match.outcome_self.score > match.outcome_enemy.score) return 3;
      else return 0;
    } else {
      return 0;
    }
  }

  getCardColor(match: Match): string {
    switch (this.getPoints(match)) {
      case 0: {
        return 'red';
      }
      case 1: {
        return 'yellow';
      }
      case 3: {
        return 'green';
      }
    }
  }

  outcomeText(match: Match): string {
    switch (this.getPoints(match)) {
      case 0: {
        return 'Verloren';
      }
      case 1: {
        return 'Gelijk gespeeld';
      }
      case 3: {
        return 'Gewonnen';
      }
    }
  }

  get matches(): Match[] {
    return this._matchService.getAllMatches(true);
  }

}
