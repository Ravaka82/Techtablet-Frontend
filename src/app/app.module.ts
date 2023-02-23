
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule}from '@angular/material/form-field';
import { MatInputModule}from '@angular/material/input';
import { MatButtonModule}from '@angular/material/button';
import { MatCheckboxModule}from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { NgxPrintModule} from "ngx-print";
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilatelierComponent } from './acceuilatelier/acceuilatelier.component';
import { ListesProduitchoisiComponent } from './listes-produitchoisi/listes-produitchoisi.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ListesCommandesSouhaiterComponent } from './listes-commandes-souhaiter/listes-commandes-souhaiter.component';
import { InfoUtilisateurComponent } from './info-utilisateur/info-utilisateur.component';
import { ComfirmationPopupComponent } from './comfirmation-popup/comfirmation-popup.component';
import { HistoriqueComponent } from './historique/historique.component';
import { DetailCommandesComponent } from './detail-commandes/detail-commandes.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    AcceuilComponent,
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilatelierComponent,
    ListesProduitchoisiComponent,
    ListesCommandesSouhaiterComponent,
    InfoUtilisateurComponent,
    ComfirmationPopupComponent,
    HistoriqueComponent,
    DetailCommandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    NgxPaginationModule,
    DragDropModule,
    NgxPrintModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NgApexchartsModule,
    MatProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
