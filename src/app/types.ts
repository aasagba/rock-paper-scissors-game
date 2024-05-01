import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

export type handShape = 'rock' | 'paper' | 'scissors';
export type result = 'draw' | 'win' | 'lose';

export interface VM {
  player1Hand: handShape | null;
  player2Hand: handShape | null;
  player1Icon: IconDefinition | null;
  player2Icon: IconDefinition | null;
  player1Score: number;
  player2Score: number;
  result: result | null;
}
