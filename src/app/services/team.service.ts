import { Injectable } from '@angular/core';
import {Team} from './team';

@Injectable()
export class TeamService {

  constructor() { }

  getTeam(id: string): Team {
    return {
      id: id,
      clubName: 'MHCN',
      clubPlace: 'Nijmegen',
      teamName: 'JA2'
    };
  }

}
