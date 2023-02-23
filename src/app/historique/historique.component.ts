import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Commande } from '../Model/Commande';
import { Utilisateur } from '../Model/Utilisateur';
import { CommandeService } from '../Service/commande.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
[x: string]: any;
  nameAdmin: any;
  pages: number = 1;
  totallength: any;
  listesCommandes!: Commande[];
  listesCommandesOneClient!: Commande[];
  listes!: Commande[];
  nom!: string;
  baseUrl = environment.apiUrl;
  selectedClient: string | null = null;

  constructor(private servicecommande: CommandeService,private router: Router,private route: ActivatedRoute){
   }

  ngOnInit(): void {
    this.nameAdmin=localStorage.getItem('idUser');
    this.getHistorique();
    
  }
  getHistorique(){
    this.servicecommande.getHistoriqueCommandes().subscribe(
    data => {
      this.listesCommandes=data;
      this.listes=data;
      console.log(data);
      this.totallength= this.listesCommandes.length;
    }) 
  }
  onSubmit() {
    if (this.selectedClient) {
      this.servicecommande.getClient(this.selectedClient).subscribe(
        data => {
          this.listesCommandesOneClient = data;
          this.listesCommandes= this.listesCommandesOneClient ;
          console.log(data);
          this.totallength = this.listesCommandesOneClient.length;
        },
        error => {
          console.error(error);
        }
      );
    }
  }
  
  onClientSelect() {
    // Réinitialiser la liste des commandes pour le client sélectionné
    this.listesCommandesOneClient = [];
    this.totallength = 0;
  }
  
  
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
}