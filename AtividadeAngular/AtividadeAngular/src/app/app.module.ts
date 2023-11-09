import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    ClienteListComponent,
    AdminLoginComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
