import { Utilisateur } from './../Model/Utilisateur';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from '../Service/commande.service';
import { Commande } from '../Model/Commande';

@Component({
  selector: 'app-detail-commandes',
  templateUrl: './detail-commandes.component.html',
  styleUrls: ['./detail-commandes.component.css']
})
export class DetailCommandesComponent {
  Utilisateur: Utilisateur = new Utilisateur;
  pages: number = 1;
  totallength: any;
  nameAdmin:any;
  listesDetails!: Commande[];
  constructor(private commandeService: CommandeService,private router: Router,private route: ActivatedRoute){
   }

  ngOnInit(): void {
    this.nameAdmin=localStorage.getItem('idUser');
    this.getListesDetails();
    
  }
  getListesDetails(){//listes vehicule à réparer
    this.commandeService.getDetailCommandes(this.route.snapshot.paramMap.get('id')).subscribe(
    data => {
      this.listesDetails=data;
      console.log(data);
      this.totallength= this.listesDetails.length;
    }) 
  }
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
}
