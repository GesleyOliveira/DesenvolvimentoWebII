import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';

const routes: Routes = [
  {path:'clientes', component:ClienteListComponent},
  {path:'clientes/novo', component:ClienteFormComponent},
  {path:'clientes/editar/:id', component:ClienteFormComponent},
  {path:'clientes/excluir'},
  {path: '',
    redirectTo:'/clientes',
    pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
