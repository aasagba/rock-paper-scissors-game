import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { handShape } from '../types';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-game-actions',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './game-actions.component.html',
  styleUrl: './game-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameActionsComponent {
  @Input() rockIcon: IconDefinition;
  @Input() paperIcon: IconDefinition;
  @Input() scissorsIcon: IconDefinition;

  @Output() handSelection = new EventEmitter<handShape>();

  chooseHand(hand: handShape) {
    this.handSelection.emit(hand);
  }
}
