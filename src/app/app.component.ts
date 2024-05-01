import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { VM } from './types';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  vm$: Observable<VM>;
  player1: string;
  player2: string;
  startGame: boolean;

  onStartGame(names: { player1: string; player2: string }) {
    this.player1 = names.player1;
    this.player2 = names.player2;

    this.startGame = Boolean(this.player1 && this.player2);
  }
}
