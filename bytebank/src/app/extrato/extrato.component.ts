import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  //nao esquecer!!!
  //quando criamos um component sem colocar dentro de uma pasta ele automaticamente irá criar o component na pasta raiz do projeto no caso seria o app
  //ng s -o  = seria rodar o projeto abrindo uma janela nova com essas alteracoes

  constructor() { }

  ngOnInit(): void {

  }

}
