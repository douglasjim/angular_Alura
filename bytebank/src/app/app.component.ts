import { Component } from '@angular/core';
import { testeNovaTransferencia } from './TesteCoding/testeNovaTransferencia.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferir($event){
    console.log("passou? ",$event)
  }

}


