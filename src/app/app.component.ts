import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { handShape, result, VM } from './types';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PlayerHandIconsComponent } from './player-hand-icons/player-hand-icons.component';
import {
  faHand,
  faHandBackFist,
  faHandScissors,
} from '@fortawesome/free-regular-svg-icons';
import { GameScoresComponent } from './game-scores/game-scores.component';
import { GameActionsComponent } from './game-actions/game-actions.component';
import { moves } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    PlayerHandIconsComponent,
    GameScoresComponent,
    GameActionsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  vm$: Observable<VM>;
  player1: string;
  player2: string;
  startGame: boolean;

  faHandBackFist = faHandBackFist;
  faHand = faHand;
  faHandScissors = faHandScissors;

  private handSelectionSub$: BehaviorSubject<handShape | null> =
    new BehaviorSubject(null);
  private player1Score = 0;
  private player2Score = 0;

  ngOnInit(): void {
    this.vm$ = this.handSelectionSub$.pipe(
      map(hand => {
        console.log('hand: ', hand);

        const player1Hand = hand;
        const player2Hand = hand ? this.generateComputerHand() : null;

        const result: result = hand
          ? this.processResult(player1Hand, player2Hand)
          : null;

        const player1Score = this.player1Score;
        const player2Score = this.player2Score;

        const player1Icon = faHandBackFist;
        const player2Icon = faHandBackFist;

        return {
          player1Hand,
          player1Icon,
          player2Hand,
          player2Icon,
          player1Score,
          player2Score,
          result,
        };
      })
    );
  }
  onStartGame(names: { player1: string; player2: string }) {
    this.player1 = names.player1;
    this.player2 = names.player2;

    this.startGame = Boolean(this.player1 && this.player2);
  }

  onHandSelection(hand: handShape) {
    this.handSelectionSub$.next(hand);
  }

  generateComputerHand(): handShape {
    return moves[Math.floor(Math.random() * moves.length)];
  }

  /**
   *
   * @param player1Hand
   * @param player2Hand
   *
   * rules:
   *  > rock beats scissors
   *  > paper beats rock
   *  > scissors beats paper
   *  > same hand is draw
   */
  processResult(player1Hand: handShape, player2Hand: handShape): result {
    if (player1Hand === player2Hand) return 'draw';

    const rockBeatsScissors: boolean =
      player1Hand === 'rock' && player2Hand === 'scissors';
    const paperBeatsRock: boolean =
      player1Hand === 'paper' && player2Hand === 'rock';
    const scissorsBeatsPaper: boolean =
      player1Hand === 'scissors' && player2Hand === 'paper';

    return rockBeatsScissors || paperBeatsRock || scissorsBeatsPaper
      ? 'win'
      : 'lose';
  }
}
