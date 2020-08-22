import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Role} from '../models/role.module'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44388/api"
  getRoles(): Observable<Role[]>{
    return this.http.get<Role[]>(this.url+'/Roles')
  }

  addRole(role:Role){
    return this.http.post<any>(this.url+'/Roles',role);
  }
  
  getRoleById(id:number){
    return this.http.get<Role>(this.url+'/Roles/'+id);
  }

  deleteRoleById(role:Role){
    return this.http.delete<Role>(this.url+'/Roles/'+role.id).subscribe(
      (data) =>
      {
        alert(data);
      }
    )
  }
}
