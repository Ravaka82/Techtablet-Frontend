import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';//fanaovana alert 
import { HttpErrorResponse } from '@angular/common/http';
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
  baseUrl = environment.apiUrl;
  constructor(private productservice: ProductService,private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
  this.nameClient = localStorage.getItem('idUser');
  this.getListesChosesAVendre();
  }

  getListesChosesAVendre(){
    this.productservice.getProductsSelected()
      .subscribe(
      data => {
        this.ListesProduitSelectionner=data;
        this.totallength= this.ListesProduitSelectionner.length;
      })
  }
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
}
