import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameResultsComponent } from './game-results.component';
import { By } from '@angular/platform-browser';

describe('GameResultComponent', () => {
  let component: GameResultsComponent;
  let fixture: ComponentFixture<GameResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameResultsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('game not started state', () => {
    it('it should render start message before game is started', () => {
      component.startGame = false;
      const msg = fixture.debugElement.query(
        By.css('[data-testid="start-msg"]')
      );
      expect(msg).toBeTruthy();
      expect(msg.nativeElement.textContent).toBe(
        'Enter player names to start!'
      );
    });
  });
});
