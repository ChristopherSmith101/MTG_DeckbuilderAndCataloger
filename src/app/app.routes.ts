import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Collection } from './collection/collection';
import { Deckbuilding } from './deckbuilding/deckbuilding';
import { CardSearch } from './deckbuilding/card-search/card-search'
import { Login } from './auth/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'collection', component: Collection },
  { path: 'deckbuilder', component: Deckbuilding },
  { path: 'cardsearch', component: CardSearch },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' }
];