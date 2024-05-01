import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-player-hand-icons',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './player-hand-icons.component.html',
  styleUrl: './player-hand-icons.component.scss',
})
export class PlayerHandIconsComponent {
  @Input() player1Icon: IconDefinition;
  @Input() player2Icon: IconDefinition;
}
