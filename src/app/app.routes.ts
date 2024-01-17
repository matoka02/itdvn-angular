import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { DevicesComponent } from './components/devices/devices.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AudiComponent } from './components/audi/audi.component';
import { OpelComponent } from './components/opel/opel.component';
import { AuthComponent } from 'src/auth/components/auth/auth.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'car',
    component: CarComponent,
    children: [
      { path: 'audi', component: AudiComponent },
      { path: 'opel', component: OpelComponent },
    ]
  },
  // { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule) },
  { path: 'auth', component: AuthComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: '**', component: NotfoundComponent }
];
