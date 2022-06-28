import { Component } from '@angular/core';
import { testeNovaTransferencia } from './TesteCoding/testeNovaTransferencia.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  valorTransferencia: any;
  //valorTransferencia: any =  {} //podemos resolver o problema do erro que ocorre no console quando a gente tentar pegar os valores daqui de dentro pelo html iniciando ele como chaves
  //ou podemos resolver esse problema la no html usando o ?

  ixibirModal: boolean;
  mensagemErro: string;

  transferir($event){
    this.valorTransferencia = $event;
    console.log("UIA",$event)
    this.modalErro($event)
  }

  modalErro($event){
    this.ixibirModal = $event === "Informe um valor válido" ? true : false;
    console.log("mensagem DERRRO" ,$event)
    console.log("mensagem DERRRO123" ,this.ixibirModal)
    //this.ixibirModal = false;
    //Informe um valor válido
  }

}


