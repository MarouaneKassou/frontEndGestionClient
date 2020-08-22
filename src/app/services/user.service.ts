import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44388/api"

  getUser(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.url+'/Utilisateurs')
  }

  addUser(user:Utilisateur){
    alert(JSON.stringify(user.idRoleNavigation));
    return this.http.post<Utilisateur>(this.url+'/Utilisateurs',user);
  }
  getUsers(user:Utilisateur){
    return this.http.get(this.url+'/Utilisateurs/'+user.id);
  }
 
  deleteUser(user:Utilisateur){
    return this.http.delete(this.url+'/Utilisateurs/'+user.id).subscribe(
      (data) =>
      {
        alert(data);
      }
    )
  }
  getByKeyword(keyword: string){
    return this.http.get<Utilisateur[]>(this.url+'/Utilisateurs/search/'+keyword);
  }
}
