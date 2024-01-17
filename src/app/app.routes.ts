import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { DevicesComponent } from './components/devices/devices.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AudiComponent } from './components/audi/audi.component';
import { OpelComponent } from './components/opel/opel.component';
import { AuthComponent } from 'src/auth/components/auth/auth.component';
import { OutdoorComponent } from './components/devices/outdoor/outdoor.component';
import { IndoorComponent } from './components/devices/indoor/indoor.component';
import { DeviceDetailsComponent } from './components/devices/device-details/device-details.component';
import { AuthGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule) },
  { path: 'auth', component: AuthComponent },
  {
    path: 'car',
    component: CarComponent,
    children: [
      { path: 'audi', component: AudiComponent },
      { path: 'opel', component: OpelComponent },
    ]
  },
  // { path: 'devices', component: DevicesComponent },
  {
    path: 'devices', component: DevicesComponent, children: [
      { path: 'outdoor', component: OutdoorComponent },
      { path: 'indoor', component: IndoorComponent },
      { path: 'indoor/:id', component: DeviceDetailsComponent },
    ]
  },
  { path: 'languages', component: LanguagesComponent, canActivate: [AuthGuardGuard] },
  { path: '**', component: NotfoundComponent }
];
