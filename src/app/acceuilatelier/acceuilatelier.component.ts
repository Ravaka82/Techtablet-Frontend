import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Product } from '../Model/Product';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-acceuilatelier',
  templateUrl: './acceuilatelier.component.html',
  styleUrls: ['./acceuilatelier.component.css']
})
export class AcceuilatelierComponent {
  nameAdmin: any;
  ListesProduct!: Product[];
  pages: number = 1;
  totallength: any;
  totalPrice: any;
  baseUrl = environment.apiUrl;
  constructor(private _snackBar: MatSnackBar,private productservice: ProductService,private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.nameAdmin = localStorage.getItem('idUser');
    this.getAllProduct();
  }

  getAllProduct(){  // listes produits
    this.productservice.getAllProduct()
      .subscribe(
      data => {
        this.ListesProduct=data;
      })
  }
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
}


