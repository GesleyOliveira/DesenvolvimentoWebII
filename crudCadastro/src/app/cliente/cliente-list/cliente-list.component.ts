import { Component, OnInit } from '@angular/core';
import {Cliente} from '../shared/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit{
  title = 'Relação de Clientes';
  'clientes': Cliente[]

  constructor(){}
  ngOnInit() { 
    this.clientes = [
      {id:1, nome: 'Jennifer', endereco: 'Rua da Jennifer', limiteCredito: 1200},
      {id:2, nome: 'Taylor', endereco: 'Rua da Taylor', limiteCredito: 800},
      {id:3, nome: 'Fernando', endereco: 'Rua da Fernando', limiteCredito: 1500},
      {id:4, nome: 'Marina', endereco: 'Rua da Marina', limiteCredito: 750.3},
      {id:5, nome: 'Cindy', endereco: 'Rua da Cindy', limiteCredito: 1250},
    ]
  }
}
