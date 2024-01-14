import { Routes } from '@angular/router';
import { CardNotebookComponent, CardPhoneComponent, CardTVComponent } from './cards/components';
import { postsRoute } from './posts/routes';

export const routes: Routes = [
  { path: 'notebook', component: CardNotebookComponent },
  { path: 'phone', component: CardPhoneComponent },
  { path: 'tv', component: CardTVComponent },
  ...postsRoute
];
