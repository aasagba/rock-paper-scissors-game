import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { handShape, VM } from './types';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PlayerHandIconsComponent } from './player-hand-icons/player-hand-icons.component';
import { faHandBackFist } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    PlayerHandIconsComponent,
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

  private initGame$: BehaviorSubject<handShape | null> = new BehaviorSubject(
    null
  );
  private player1Score = 0;
  private player2Score = 0;

  ngOnInit(): void {
    this.vm$ = this.initGame$.pipe(
      map(hand => {
        const player1Hand = hand;
        const player2Hand = null;

        const result = null;

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
}
