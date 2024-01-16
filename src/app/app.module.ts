import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { PostComponent } from './components/post/post.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataBaseService } from './data-base.service';

@NgModule({
  declarations:[
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataBaseService)
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{}
