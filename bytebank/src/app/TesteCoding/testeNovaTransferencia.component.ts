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
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number;
  destino: number;

  transferir(){
    
    if(this.ehValido()){
      console.log("EHVALIDO?", this.ehValido())
      this.aoTransFerir.emit({valor: this.valor, destino: this.destino});
      this.limparCampos();
    }

  }

  private ehValido(){
    const valido = this.valor === 0 ? false : this.valor === undefined ? false : this.valor === null ? false : 100;
    if(!valido){
      this.valoresComErro.emit('Informe um valor válido');
    }
    return valido
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }

}
