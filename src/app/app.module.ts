import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { FlowersComponent } from './components/flowers/flowers.component';
import { UsersService } from './users.service';
import { CarComponent } from './car/components/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    // FlowersComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
