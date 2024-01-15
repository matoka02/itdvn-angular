import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { FlowersComponent } from './components/flowers/flowers.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    FlowersComponent
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
