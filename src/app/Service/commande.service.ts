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
  Url3= `${this.baseUrl}/product/findAndUpdateCommands/`+localStorage.getItem('idUser');
  Url4= `${this.baseUrl}/product/getHistoriqueCommandes`;

  creationCommande(commande: Commande)
  {
    return this.http.post<Commande>(this.Url1,commande);
  }
  updateStatusCommande()
  {
    return this.http.post(this.Url3, null);
  }
  getCommandeParClient(utilisateurId:any){
    const repons =this.http.get<Commande[]>(`${this.Url2}/${utilisateurId}`);
    return repons;
  }
  getHistoriqueCommandes()
  {
    return this.http.get<Commande[]>(this.Url4);
  }
}