import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-scores',
  standalone: true,
  imports: [],
  templateUrl: './game-scores.component.html',
  styleUrl: './game-scores.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameScoresComponent {
  @Input() player1Score: number = 0;
  @Input() player2Score: number = 0;
}
