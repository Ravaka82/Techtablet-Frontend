import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from '../Model/Commande';
import { CommandeService } from '../Service/commande.service';

@Component({
  selector: 'app-listes-commandes-souhaiter',
  templateUrl: './listes-commandes-souhaiter.component.html',
  styleUrls: ['./listes-commandes-souhaiter.component.css']
})
export class ListesCommandesSouhaiterComponent {
  nameClient: any;
  ListesCommande!: Commande[];
  pages: number = 1;
  totallength: any;
  totalPrice: any;
  
  constructor(private commandeservice: CommandeService,private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.nameClient = localStorage.getItem('idUser');
    this.getAllCommandeClient();
  }

  getAllCommandeClient(){  // listes commandes
    this.commandeservice.getCommandeParClient(this.nameClient)
      .subscribe(
      (data:any) => {
        this.ListesCommande=data;
        console.log("ddddd"+data)     
      })
  }
  getItemTotalPrice(item: any): number {
    return item.price * item.quantite;
  }
  roundPrice(price: number): string {
    return price.toFixed(2);
  }

  // Calcule total arrondi des prix des articles
  getTotalPrice(): number {
    return this.ListesCommande.reduce((total, item) => {
      localStorage.setItem('totalApayer', (this.roundPrice(total + this.getItemTotalPrice(item)).toString()));
      return total + this.getItemTotalPrice(item);
    }, 0);
  }

  goToInfoUser(){
    this.router.navigate(['/infoUser']);
  }
}