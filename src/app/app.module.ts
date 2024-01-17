import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { DevicesComponent } from './components/devices/devices.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { CarComponent } from './components/car/car.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AudiComponent } from './components/audi/audi.component';
import { OpelComponent } from './components/opel/opel.component';
import { AuthModule } from 'src/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    LanguagesComponent,
    CarComponent,
    HomeComponent,
    NotfoundComponent,
    AudiComponent,
    OpelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
