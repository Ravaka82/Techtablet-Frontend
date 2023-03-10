import { AcceuilComponent } from './acceuil/acceuil.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TemplateComponent } from './template/template.component';
import { AcceuilatelierComponent } from './acceuilatelier/acceuilatelier.component';
import { ListesProduitchoisiComponent} from './listes-produitchoisi/listes-produitchoisi.component';
import { ListesCommandesSouhaiterComponent} from './listes-commandes-souhaiter/listes-commandes-souhaiter.component';
import {InfoUtilisateurComponent}from './info-utilisateur/info-utilisateur.component';
import {HistoriqueComponent} from'./historique/historique.component';
import {DetailCommandesComponent} from'./detail-commandes/detail-commandes.component';

const routes: Routes = [
  {path: 'login', component: RegisterUserComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'TechTablet', component: TemplateComponent},
  {path: 'acceuilatelier', component: AcceuilatelierComponent},
  {path: 'listesproduitchoisi', component: ListesProduitchoisiComponent},
  {path: 'whishlist', component:ListesCommandesSouhaiterComponent},
  {path: 'infoUser',component:InfoUtilisateurComponent},
  {path: 'historique',component:HistoriqueComponent},
  {path: 'detailCommande/:id',component:DetailCommandesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
