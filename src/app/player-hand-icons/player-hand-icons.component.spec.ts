import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerHandIconsComponent } from './player-hand-icons.component';

xdescribe('PlayerHandIconsComponent', () => {
  let component: PlayerHandIconsComponent;
  let fixture: ComponentFixture<PlayerHandIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerHandIconsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerHandIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
