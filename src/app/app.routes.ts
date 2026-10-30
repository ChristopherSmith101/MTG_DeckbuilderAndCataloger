import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { Collection } from './collection/collection';
import { Deckbuilding } from './deckbuilding/deckbuilding';
import { CardSearch } from './deckbuilding/card-search/card-search';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'collection', component: Collection },
      { path: 'deckbuilder', component: Deckbuilding },
      { path: 'cardsearch', component: CardSearch }
    ]
  },
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register }
    ]
  }
];