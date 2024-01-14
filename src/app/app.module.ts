import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { CardModule } from './cards';
import { PostsModule } from './posts';
import { UsersModule } from './users';

@NgModule({
  declarations:[AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    PostsModule,
    UsersModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{}
