import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { handShape } from '../types';

@Component({
  selector: 'app-game-actions',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './game-actions.component.html',
  styleUrl: './game-actions.component.scss',
})
export class GameActionsComponent {
  @Input() rockIcon;
  @Input() paperIcon;
  @Input() scissorsIcon;

  chooseHand(hand: handShape) {}
}
