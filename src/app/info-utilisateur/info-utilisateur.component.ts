import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from '../Service/commande.service';

@Component({
  selector: 'app-info-utilisateur',
  templateUrl: './info-utilisateur.component.html',
  styleUrls: ['./info-utilisateur.component.css']
})
export class InfoUtilisateurComponent {
  nameClient: any;
 
  
  constructor(private commandeservice: CommandeService,private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.nameClient = localStorage.getItem('idUser');
  }
}
