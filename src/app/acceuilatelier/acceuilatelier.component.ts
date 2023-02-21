import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-acceuilatelier',
  templateUrl: './acceuilatelier.component.html',
  styleUrls: ['./acceuilatelier.component.css']
})
export class AcceuilatelierComponent {
  nameAtelier: any;
  pages: number = 1;
  totallength: any;
  totalPrice: any;
  baseUrl = environment.apiUrl;
  constructor(private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
  this.nameAtelier = localStorage.getItem('idUser');

  }

  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
}
