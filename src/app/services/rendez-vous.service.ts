import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rendez_Vous } from '../models/rendez_vous.module';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44388/api"
  getRendezVous(): Observable<Rendez_Vous[]>{
    return this.http.get<Rendez_Vous[]>(this.url+'/RendezVous')
  }

  addRendezVous(rendezvous:Rendez_Vous){
    return this.http.post<any>(this.url+'/RendezVous',rendezvous);
  }
  
  getRendezVousById(id:number){
    return this.http.get<Rendez_Vous>(this.url+'/RendezVous/'+id);
  }

  deleteRendezVousById(rendezvous:Rendez_Vous){
    return this.http.delete<Rendez_Vous>(this.url+'/RendezVous/'+rendezvous.id).subscribe(
      (data) =>
      {
        alert(data);
      }
    )
  }
}
