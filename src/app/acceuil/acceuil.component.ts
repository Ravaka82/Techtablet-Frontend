import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Model/Product';
import { environment } from 'src/environments/environment';
import { ProductService } from '../Service/product.service';
import { CommandeService } from '../Service/commande.service';
import { Commande } from '../Model/Commande';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
  nameClient: any;
  ListesProduitSelectionner!: Product[];
  pages: number = 1;
  totallength: any;
  totalPrice: any;
  submitting: boolean = false;
  selectedCard: Product | null = null;
  selectedQuantity: string | null = null;
  Commande: Commande = new Commande();

  constructor(private _snackBar: MatSnackBar,private commandeservice: CommandeService,private productservice: ProductService,private router: Router,private route: ActivatedRoute){}

  ngOnInit() {
    this.nameClient = localStorage.getItem('idUser');
    this.getListesChosesAVendre();
  }
  
  getListesChosesAVendre() {
    this.submitting = true;
    this.productservice.getProductsSelected().subscribe(
      data => {
        this.ListesProduitSelectionner = data;
        this.totallength = this.ListesProduitSelectionner.length;
      },
      error => {},
      () => this.submitting = false
    );
  }

  selectCard(card: Product) {
    this.selectedCard = card;
    const storedQuantity = localStorage.getItem(card.id);// Récupération de la quantité précédemment sauvegardée pour le produit sélectionné
    if (storedQuantity !== null) {
      const quantityInput = document.getElementById('quantite') as HTMLInputElement;// Si une quantité est déjà sauvegardée pour le produit, la mettre à jour dans l'input
      quantityInput.value = storedQuantity;
    }
    this.selectedQuantity = storedQuantity;
  }

  saveQuantity(quantity: number, productId: string) {// Ajouter une fonction pour sauvegarder la quantité dans localStorage
    localStorage.setItem(productId, String(quantity));
  }

  onQuantityChange(event: any, productId: string) {
    const quantity = event?.target?.value;
    if (quantity !== null) {
      this.saveQuantity(quantity, productId);
    }
  }

  deselectCard() {
      this.selectedCard = null;
  }
  setCommande(idproduct: number,name: string,color:string,quantite: string | null,price:any,utilisateurId:any,image:any){
      this.Commande.idProduct=idproduct;
      this.Commande.name =name;
      this.Commande.color=color;
      if (quantite !== null) {
        this.Commande.quantite = parseInt(quantite);
      }
      this.Commande.price=price;
      this.Commande.utilisateurId=utilisateurId;
      this.Commande.image=image;
      this.commandeservice.creationCommande(this.Commande)
      .subscribe(data => {
        console.log(data);
        this.Commande = new Commande();
        this._snackBar.open("commande effectuer ✔️✔️", 'Close',{
          duration:2000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['success-alert']
        });
        this.router.navigate(['acceuil']);
      },
      (error: HttpErrorResponse)=>{
        this._snackBar.open( error.error.message , 'Close',{
          duration:2000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['warning-alert']
        });
      }
    )
  };
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
}
