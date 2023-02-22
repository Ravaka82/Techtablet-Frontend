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
  nameAdmin: any;
  pages: number = 1;
  totallength: any;
  listesCommandes!: Commande[];
  baseUrl = environment.apiUrl;
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
      console.log(data);
      this.totallength= this.listesCommandes.length;
    }) 
  }
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
}