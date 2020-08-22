import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte.module';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44388/api"
  getCompts(): Observable<Compte[]>{
    return this.http.get<Compte[]>(this.url+'/Comptes')
  }

  addCompte(compte:Compte){
    return this.http.post<any>(this.url+'/Comptes',compte);
  }
  
  getCompteById(id:number){
    return this.http.get<Compte>(this.url+'/Comptes/'+id);
  }

  deleteCompteById(compte:Compte){
    return this.http.delete<Compte>(this.url+'/Comptes/'+compte.id).subscribe(
      (data) =>
      {
        alert(data);
      }
    )
  }
}
