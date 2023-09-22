import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteformComponent } from './cliente/cliente-form/clienteform.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ProdutoComponent } from './produto/produtoform/produto.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteformComponent,
    ClienteListComponent,
    ProdutoComponent,
    ProdutoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
