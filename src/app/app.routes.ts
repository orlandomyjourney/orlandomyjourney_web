import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home, data: { lang: 'en' } },
  { path: 'es', component: Home, data: { lang: 'es' } },
  { path: '**', redirectTo: '' },
];
