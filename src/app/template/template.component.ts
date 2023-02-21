import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  constructor(private http:HttpClient,private _snackBar: MatSnackBar,private router: Router,private route: ActivatedRoute){ 
  }
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
  ngOnInit(): void{
    
  }
}
