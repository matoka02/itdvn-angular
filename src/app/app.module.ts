import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';

// import { ParentComponent } from './components/parent/parent.component';
// import { ChildComponent } from './components/child/child.component';
// import { GrandChildComponent } from './components/grand-child/grand-child.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { GrandChildComponent } from './lifecycle/grand-child/grand-child.component';

@NgModule({
  declarations: [
    AppComponent,
    // ParentComponent,
    // ChildComponent,
    // GrandChildComponent
    ChildComponent,
    GrandChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
