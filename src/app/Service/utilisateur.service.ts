import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Utilisateur } from './../Model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient){}
  Url1= `${this.baseUrl}/auth/signup`;
  Url2= `${this.baseUrl}/utilisateur/updateAddress/`+localStorage.getItem("idUser");

  creationUtilisateur(utilisateur: Utilisateur)
  {
    return this.http.post<Utilisateur>(this.Url1,utilisateur);
  }

  updateUtilisateurAddress(lieu_livraison: string, totalpayer: string) {
    const body = { lieu_livraison, totalpayer };
    return this.http.post(this.Url2, body);
  }
}



