import { AcceuilComponent } from './acceuil/acceuil.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TemplateComponent } from './template/template.component';
import { AcceuilatelierComponent } from './acceuilatelier/acceuilatelier.component';
import { ListesProduitchoisiComponent} from './listes-produitchoisi/listes-produitchoisi.component';
import { ListesCommandesSouhaiterComponent} from './listes-commandes-souhaiter/listes-commandes-souhaiter.component';

const routes: Routes = [
  {path: 'login', component: RegisterUserComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'TechTablet', component: TemplateComponent},
  {path: 'acceuilatelier', component: AcceuilatelierComponent},
  {path: 'listesproduitchoisi', component: ListesProduitchoisiComponent},
  {path: 'whishlist', component:ListesCommandesSouhaiterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
