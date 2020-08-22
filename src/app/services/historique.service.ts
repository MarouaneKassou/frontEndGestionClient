import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Historique} from '../models/historique.module'
@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44388/api"
  getHistoriques(): Observable<Historique[]>{
    return this.http.get<Historique[]>(this.url+'/Historiques')
  }

  addHistorique(historique:Historique){
    return this.http.post<any>(this.url+'/Historiques',historique);
  }
  
  getHistoriqueById(id:number){
    return this.http.get<Historique>(this.url+'/Historiques/'+id);
  }

  deleteHistoriqueById(historique:Historique){
    return this.http.delete<Historique>(this.url+'/Historiques/'+historique.id).subscribe(
      (data) =>
      {
        alert(data);
      }
    )
  }
}
