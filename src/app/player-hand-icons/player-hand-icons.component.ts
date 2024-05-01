import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-player-hand-icons',
  standalone: true,
  imports: [FaIconComponent, NgIf],
  templateUrl: './player-hand-icons.component.html',
  styleUrl: './player-hand-icons.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerHandIconsComponent {
  @Input() player1Icon: IconDefinition;
  @Input() player2Icon: IconDefinition;
}
