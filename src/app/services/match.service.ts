import { Injectable } from '@angular/core';
import {Match} from './match';
import {TeamService} from './team.service';

@Injectable()
export class MatchService {

  constructor(private _teamService: TeamService) { }

  public getAllMatches(fetchTeam: boolean): Match[] {
    const matches: Match[] = [
      {
        id: 'sdfsdf',
        enemy_id: 'a;sldkfja;sdk',
        date_time: 123123123123,
        played: true,
        outcome_self: {
          score: 10,
          g_cards: 0,
          y_cards: 1,
          r_cards: 0,
          corners: 0,
        },
        outcome_enemy: {
          score: 1,
          g_cards: 1,
          y_cards: 0,
          r_cards: 0,
          corners: 5,
        }
      },
      {
        id: 'sjsdjdj',
        enemy_id: 'a;slja;sdk',
        date_time: 123123133123,
        played: false,
        outcome_self: {
          score: 2,
          g_cards: 0,
          y_cards: 1,
          r_cards: 0,
          corners: 1,
        },
        outcome_enemy: {
          score: 1,
          g_cards: 1,
          y_cards: 0,
          r_cards: 0,
          corners: 7,
        }
      }
    ];
    if (fetchTeam) {
      for (const i in matches) {
        matches[i].enemy = this._teamService.getTeam(matches[i].enemy_id);
      }
    }
    return matches;
  }

  public getMatch(matchId: string, fetchTeam: boolean): Match {
    const matches = this.getAllMatches(fetchTeam);
    for (const match of matches) {
      if (match.id === matchId) {
        return match;
      }
    }
    return null;
  }

}
