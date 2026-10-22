import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardSearch } from './card-search/card-search';

@Component({
  selector: 'app-root',
  imports: [CardSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mtg-deckbuilder');
}