import { Component, Input } from '@angular/core';
import { result } from '../types';

@Component({
  selector: 'app-game-results',
  standalone: true,
  imports: [],
  templateUrl: './game-results.component.html',
  styleUrl: './game-results.component.scss',
})
export class GameResultsComponent {
  @Input() startGame: boolean;
  @Input() result: result;
  // @Input() winner: string;
  @Input() player1: string;
  @Input() player2: string;
}
