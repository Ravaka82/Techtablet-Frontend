import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../Model/Role';
import { Utilisateur } from '../Model/Utilisateur';
import { RoleServiceService } from '../Service/role-service.service';
import { UtilisateurService } from '../Service/utilisateur.service';
import { LoginService } from '../Service/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';//fanaovana alert 
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements AfterViewInit {
  Role!: Role[];
  nom!: string;
  Utilisateur: Utilisateur = new Utilisateur();
  submitted = false;
  nomFinancier!: string;
  motdepasseFinancier!: string;
  nomAtelier!: string;
  motdepasseAtelier!:string;
  submitting1: boolean = false;
  submitting2: boolean = false;
  constructor(private _snackBar: MatSnackBar,private roleservice: RoleServiceService,private utilisateurservice: UtilisateurService,private router: Router,private loginservice: LoginService) { }

  ngAfterViewInit(): void { 
    this.listRole();
    this.nomAtelier="administrateur";
    this.motdepasseAtelier="12345678";
    this.Utilisateur.nom="Utilisateur";
    this.Utilisateur.mot_de_passe="123456789";
  }

  listRole(): void{// findRole
    this. roleservice.getAllRole()
      .subscribe(
        data => {
          this.Role=data;
        })
  }
  saveUtilisateur() {//creation utilisateur
    this.submitting2 = true;
    this.utilisateurservice.creationUtilisateur(this.Utilisateur)
    .subscribe(data => {
      console.log(data);
      this.Utilisateur = new Utilisateur();
      this._snackBar.open("inscription avec succès ✔️✔️ ", 'Close',{
        duration:500000,
        // css matsnack bar
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['success-alert']
      });
      this.submitting2 = false;
      this.router.navigate(['login']);
    },
    (error: HttpErrorResponse)=>{
      this._snackBar.open( error.error.message , 'Close',{
        duration:500000,
        // css matsnack bar
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['warning-alert']
      });
    }

  )};
  onSubmit() {//action boutton
    this.submitted = true;
    this.saveUtilisateur();    
  }
  LoginUtilisateur()
  {
   this.submitting1 = true;
   this.loginservice.loginUtilisateur(this.Utilisateur.nom,this.Utilisateur.mot_de_passe)
   .subscribe(
     (data:string) => {
       console.log("donnee "+data);
       const d=JSON.parse(data);
       localStorage.setItem('idUser',d.id);
       localStorage.setItem('NomUser',d.nom);
       localStorage.setItem('rolesUser',d.roles);
       this.router.navigate(['/acceuil']);
       if( d.roles=="ROLE_ADMIN"){
        this.router.navigate(['/login']);
       }
     },
     //message d'erreur
     (error: HttpErrorResponse)=>{
       const fd= JSON.parse(error.error);
      this._snackBar.open( fd.message , 'Close',{
        duration:500000,
    // css matsnack bar 
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['warning-alert']
      });
    }) 
   
   }
   
   boutonLogin(){
    this.submitted = true;
    this.LoginUtilisateur();  
   }

   LoginAtelier(){
    this.loginservice.loginUtilisateur(this.nomAtelier,this.motdepasseAtelier)
   .subscribe(
     (data:string) => {
       console.log(data);
       const d=JSON.parse(data);
       localStorage.setItem('idUser',d.id);
       localStorage.setItem('NomUser',d.nom);
       localStorage.setItem('rolesUser',d.roles);
        this.router.navigate(['/acceuilatelier']);
        if(d.roles=="ROLE_CLIENT"){
          this.router.navigate(['/login']);
         }
     },
     //message d'erreur
     (error: HttpErrorResponse)=>{
       const fd= JSON.parse(error.error);
      this._snackBar.open( fd.message , 'Close',{
        duration:500000,
        // css matsnack bar 
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['warning-alert']
      });
    }) 
   }
   ButtonLoginAtelier(){
    this.submitted = true;
    this.LoginAtelier();  
   }
}
