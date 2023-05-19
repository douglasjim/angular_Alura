import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memoteca';
}


//arrow fuction usar mais vezes () => {

//}
//colocando um atributo com algum personalizado nas tag html podemos buscar la usando o querySelectorAll e o nome desse atributo que foi colocado no html entre colchetes ficaria assim: document.querySelectorAll("[nome-do-atributo-do-html]")
//ou podemos usar o elementos.getAttribute("[data-cor]") / como fica no html: <li data-cor="laranja" data-tipo="tinta-exterior" onclick="mudaCores(this)" class="item">Tinta laranja</li>
//parentNode / data-attributes
//relebrando como faz o forEach - parecido com o for i in range
// items.forEach((elemento) => {
//   console.log("teste")
// })


