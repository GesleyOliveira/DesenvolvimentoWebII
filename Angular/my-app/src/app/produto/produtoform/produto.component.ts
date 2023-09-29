import { Component } from '@angular/core';
import { Produto } from '../shared/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
   //criando variável do tipo cliente
   'produto': Produto;
   //criando variável vazia
   title = '';

   constructor(){}

    ngOnInit(){
      this.title = 'Novo Produto';
      this.produto = new Produto();
    }

onSubmit(){
  console.log(this.produto);
}

}
