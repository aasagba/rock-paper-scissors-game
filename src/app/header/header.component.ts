import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  form: FormGroup;

  @Output() playerNames: EventEmitter<{ player1: string; player2: string }> =
    new EventEmitter<{ player1: string; player2: string }>();

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm() {
    this.form = new FormGroup({
      player1: new FormControl(null, Validators.required),
      player2: new FormControl(null, Validators.required),
    });
  }

  startGame() {
    if (!this.form.valid) return;

    const player1 = this.form.get('player1').value;
    const player2 = this.form.get('player2').value;

    this.playerNames.emit({
      player1,
      player2,
    });
  }
}
