import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deckbuilding } from './deckbuilding';

describe('Deckbuilding', () => {
  let component: Deckbuilding;
  let fixture: ComponentFixture<Deckbuilding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deckbuilding],
    }).compileComponents();

    fixture = TestBed.createComponent(Deckbuilding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
