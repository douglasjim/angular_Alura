import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { testeNovaTransferencia } from './TesteCoding/testeNovaTransferencia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    testeNovaTransferencia,//com isso outros components pode usar esse component novo, pra isso acontecer temos que importar no module dele
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
