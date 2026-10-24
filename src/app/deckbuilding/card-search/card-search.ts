import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ScryfallCard } from './scryfall-card';
import { ScryfallError } from './scryfall-error';

@Component({
  selector: 'app-card-search',
  imports: [],
  templateUrl: './card-search.html',
  styleUrl: './card-search.css',
})
export class CardSearch {
  private http = inject(HttpClient);
  card = signal<ScryfallCard | ScryfallError | null>(null);

  searchCard(cardName: string, event: SubmitEvent): void {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Form submitted:', cardName);
    const name: string = cardName.trim();

    if (!name) {
      return; // Exit if the input is empty
    }

    const url: string = 'https://api.scryfall.com/cards/named'; // scryfall API endpoint for card lookup

    this.http.get<ScryfallCard>(url, {
      params: { fuzzy: name }
    }).subscribe({
      next: (response) => {
        console.log('HTTP callback executed:', response);
        this.card.set(response);
        console.log('Card property updated:', this.card.name);
      },
      error: (error: HttpErrorResponse) => {
        this.card.set(error.error); // Clear the card property on error
        console.error('HTTP error:', error);
      }
    });

  }
}
