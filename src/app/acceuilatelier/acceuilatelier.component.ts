import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Product } from '../Model/Product';
import { ProductChoice } from '../Model/ProductChoice';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-acceuilatelier',
  templateUrl: './acceuilatelier.component.html',
  styleUrls: ['./acceuilatelier.component.css']
})
export class AcceuilatelierComponent {
  nameAdmin: any;
  ProductChoice: ProductChoice = new ProductChoice();
  ListesProduct!: Product[];
  pages: number = 1;
  totallength: any;
  totalPrice: any;
  baseUrl = environment.apiUrl;
  submitting: boolean = false;
  constructor(private _snackBar: MatSnackBar,private productservice: ProductService,private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.nameAdmin = localStorage.getItem('idUser');
    this.getAllProduct();
  }

  setidProduct(idProduct:any){
    this.ProductChoice.idProduct= idProduct;
  }

  getAllProduct(){  // listes produits
    this.submitting = true;
    this.productservice.getAllProduct()
      .subscribe(
      data => {
        this.ListesProduct=data;
      },
      error => {},
      () => this.submitting = false
    );
  }

  chooseProduct(){
    // console.log("idproduct"+this.ProductChoice.idProduct);
    this.productservice.productChoose(this.ProductChoice)
    .subscribe(data => {
      console.log(data);
      this.ProductChoice = new ProductChoice();
      this._snackBar.open("Produit choisi ✔️✔️", 'Close',{
        duration:2000,
        // css matsnack bar 
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['success-alert']
      });
      this.router.navigate(['acceuilatelier']);
    },
    (error: HttpErrorResponse)=>{
      this._snackBar.open( error.error.message , 'Close',{
        duration:2000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['warning-alert']
      });
    }
  )};

  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
}


