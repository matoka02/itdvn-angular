import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { CardTVComponent } from './components/card-tv/card-tv.component';
// import { CardPhoneComponent } from './components/card-phone/card-phone.component';
// import { CardNotebookComponent } from './components/card-notebook/card-notebook.component';
import { CardTVComponent, CardPhoneComponent, CardNotebookComponent } from './components';

@NgModule({
  declarations: [
    CardTVComponent,
    CardPhoneComponent,
    CardNotebookComponent
  ],
  imports: [CommonModule],
})
export class CardModule { }
