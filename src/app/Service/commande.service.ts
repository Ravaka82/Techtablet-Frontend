import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Commande } from '../Model/Commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient){}
  Url1= `${this.baseUrl}/product/createCommande`;
  Url2= `${this.baseUrl}/product/findCommandeById`;

  creationCommande(commande: Commande)
  {
    return this.http.post<Commande>(this.Url1,commande);
  }
  getCommandeParClient(utilisateurId:any){
    const repons =this.http.get<Commande[]>(`${this.Url2}/${utilisateurId}`);
    return repons;
  }
}