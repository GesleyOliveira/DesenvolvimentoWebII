import { Component } from '@angular/core';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './clienteform.component.html',
  styleUrls: ['./clienteform.component.css']
})
export class ClienteformComponent {
  //criando variável do tipo cliente
  'cliente': Cliente;
  //criando variável vazia
  title = '';

  constructor(){}

    ngOnInit(){
      this.title = 'Novo Cliente';
      this.cliente = new Cliente();
    }

onSubmit(){
  console.log(this.cliente);
}

}

