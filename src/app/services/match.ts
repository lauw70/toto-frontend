import {Team} from './team';

export interface Match {
  id: string;
  enemy_id: string;
  enemy?: Team;
  date_time: number;
  played: boolean;
  outcome_self: Outcome;
  outcome_enemy: Outcome;
}

interface Outcome {
  score: number;
  g_cards: number;
  y_cards: number;
  r_cards: number;
  corners: number;
}
