import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
export class PlayerHandIconsComponent implements OnChanges {
  @Input() player1Icon: IconDefinition;
  @Input() player2Icon: IconDefinition;

  icon1: IconDefinition;
  icon2: IconDefinition;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', changes);
    this.icon1 = changes?.['player1Icon'].currentValue;
    this.icon2 = changes?.['player2Icon'].currentValue;
  }
}
