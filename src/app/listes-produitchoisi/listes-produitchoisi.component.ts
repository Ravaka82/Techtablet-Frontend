import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProductChoice } from '../Model/ProductChoice';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-listes-produitchoisi',
  templateUrl: './listes-produitchoisi.component.html',
  styleUrls: ['./listes-produitchoisi.component.css']
})
export class ListesProduitchoisiComponent {
  nameAdmin: any;
  ListesProductChoisi!: ProductChoice[];
  pages: number = 1;
  totallength: any;
  totalPrice: any;
  baseUrl = environment.apiUrl;
  constructor(private _snackBar: MatSnackBar,private productservice: ProductService,private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.nameAdmin = localStorage.getItem('idUser');
    this.getAllProductChoice();
  }

  getAllProductChoice(){  // listes produits
    this.productservice.getAllProductChoice()
      .subscribe(
      data => {
        this.ListesProductChoisi=data;
      })
  }
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
}


