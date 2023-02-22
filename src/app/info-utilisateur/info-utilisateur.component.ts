import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ComfirmationPopupComponent } from '../comfirmation-popup/comfirmation-popup.component';
import { CommandeService } from '../Service/commande.service';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-info-utilisateur',
  templateUrl: './info-utilisateur.component.html',
  styleUrls: ['./info-utilisateur.component.css']
})
export class InfoUtilisateurComponent {
  nomClient: any;
  prenomClient: any;
  emailClient: any;
  addresseClient: any;
  totalApayer: any = localStorage.getItem("totalApayer");
  
  constructor(public dialog: MatDialog,private commandeservice: CommandeService, private utilisateurService: UtilisateurService, private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.nomClient = localStorage.getItem('NomUser');
    this.prenomClient = localStorage.getItem('PrenomUser');
    this.emailClient = localStorage.getItem('EmailUser');
  }

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ComfirmationPopupComponent, {
      width: '250px',
      data: { title: 'Confirmation', message: 'Merci pour votre achat' },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  

  onSubmit(){
    this.utilisateurService.updateUtilisateurAddress(this.addresseClient, this.totalApayer).subscribe(resp =>{
      this.commandeservice.updateStatusCommande().subscribe(resp=>{
        this.openConfirmationDialog();
        localStorage.removeItem("totalApayer");
      })
    });
  }
}

