import { Component } from '@angular/core';
import { Produto } from '../shared/produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  'produto': Produto; //criando variável do tipo Cliente.
  title = " "; //dando um valor vazio String a variável title.


  constructor() { }


  ngOnInit() {
    this.title = "Novo Produto";
    this.produto = new Produto();
  }


  ngOnSubmit() {
    console.log(this.produto);
  }
}


