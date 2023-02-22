import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Model/Product';
import { environment } from 'src/environments/environment';
import { ProductService } from '../Service/product.service';

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

  constructor(private productservice: ProductService,private router: Router,private route: ActivatedRoute){}

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

pageChange(newPage: number){
      this.router.navigate([''],{queryParams: {page: newPage}});
}
}
