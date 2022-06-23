import { Component, EventEmitter, Output } from '@angular/core';
//cuidado ao importar o EventEmitter, as vezes ele pega do lugar errado

@Component({
  selector: 'nova-transferencia',
  templateUrl: './testeNovaTransferencia.component.html',
  styleUrls: ['./testeNovaTransferencia.component.scss']
})
export class testeNovaTransferencia {
  title = 'bytebank';

  @Output() aoTransFerir = new EventEmitter<any>(); //mandar valor desse component, para outros components
  //se for possivel nunca deixar any em nada, sempre colocar um tipo especifico

  valor: number;
  destino: number;

  transferir(){
    this.aoTransFerir.emit({valor: this.valor, destino: this.destino})
    console.log("teste event")

  }

}
