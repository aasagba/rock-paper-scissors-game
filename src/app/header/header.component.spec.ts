import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should disable the play button by default', () => {
    const playBtn: HTMLButtonElement = fixture.debugElement.query(
      By.css('[data-testid="play-btn"]')
    ).nativeElement;

    expect(playBtn.disabled).toBeTruthy();
  });

  it('it should enable the play button after names entered', () => {
    const buttons = fixture.debugElement.queryAll(By.css('input'));
    const playBtn: HTMLButtonElement = fixture.debugElement.query(
      By.css('[data-testid="play-btn"]')
    ).nativeElement;

    const player1 = buttons[0].nativeElement;
    const player2 = buttons[1].nativeElement;

    expect(player1).toBeTruthy();
    expect(player2).toBeTruthy();

    player1.value = 'Joe Bloggs';
    player2.value = 'Jane Bloggs';

    player1.dispatchEvent(new Event('input'));
    player2.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(playBtn.disabled).toBeFalsy();
  });
});
