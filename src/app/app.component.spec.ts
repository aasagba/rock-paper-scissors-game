import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { moves } from './types';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('onHandSelection', () => {
    it('should fire next hand using behavioursubject', () => {
      component.onHandSelection('rock');

      fixture.detectChanges();

      component.vm$.subscribe(hand => expect(hand).toBe('rock'));
    });

    it('should call generateComputerHand()', () => {
      jest.spyOn(component, 'generateComputerHand');

      component.onHandSelection('rock');

      fixture.detectChanges();

      component.vm$.subscribe(() =>
        expect(component.generateComputerHand).toHaveBeenCalled()
      );
    });

    it('should call processResult()', () => {
      jest.spyOn(component, 'processResult');

      component.onHandSelection('paper');

      fixture.detectChanges();

      component.vm$.subscribe(() =>
        expect(component.processResult).toHaveBeenCalled()
      );
    });
  });

  describe('generateComputerHand()', () => {
    it('should generate a hand for the computer player', () => {
      const computerHand = component.generateComputerHand();

      expect(computerHand).toBeTruthy();
      expect(moves.includes(computerHand)).toBeTruthy();
    });
  });

  describe('processResult()', () => {
    describe('winning moves', () => {
      it('rock should beat scissors', () => {
        const result = component.processResult('rock', 'scissors');
        expect(result).toEqual('win');
      });

      it('paper should beat rock', () => {
        const result = component.processResult('paper', 'rock');
        expect(result).toEqual('win');
      });

      it('scissors should beat paper', () => {
        const result = component.processResult('scissors', 'paper');
        expect(result).toEqual('win');
      });
    });

    describe('losing moves', () => {
      it('scissors should lose to rock', () => {
        const result = component.processResult('scissors', 'rock');
        expect(result).toEqual('lose');
      });

      it('rock should lose to paper', () => {
        const result = component.processResult('rock', 'paper');
        expect(result).toEqual('lose');
      });

      it('paper should lose to scissors', () => {
        const result = component.processResult('paper', 'scissors');
        expect(result).toEqual('lose');
      });
    });

    describe('Draw', () => {
      it('Drawing the same hand should result in draw', () => {
        const result = component.processResult('rock', 'rock');
        expect(result).toEqual('draw');
      });
    });
  });
});
