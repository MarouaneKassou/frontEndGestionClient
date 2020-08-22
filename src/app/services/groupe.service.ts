import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groupe } from '../models/groupe.module';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44388/api"
  getGroupes(): Observable<Groupe[]>{
    return this.http.get<Groupe[]>(this.url+'/Groupes')
  }

  addGroupe(groupe:Groupe){
    return this.http.post<any>(this.url+'/Groupes',groupe);
  }
  
  getGroupeById(id:number){
    return this.http.get<Groupe>(this.url+'/Groupes/'+id);
  }

  deleteGroupeById(groupe:Groupe){
    return this.http.delete<Groupe>(this.url+'/Groupes/'+groupe.id).subscribe(
      (data) =>
      {
        alert(data);
      }
    )
  }
}
