import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.module';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44388/api";
  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.url+'/Clients')
  }

  addClient(client:Client){
    alert(JSON.stringify(client));
    return this.http.post<Client>(this.url+'/Clients',client);
  }
  
  getClientById(id:number){
    return this.http.get<Client>(this.url+'/Clients/'+id);
  }

  deleteClientById(client:Client){
    return this.http.delete<Client>(this.url+'/Clients/'+client.id).subscribe(
      (data) =>
      {
        alert(data);
      }
    )
  }
}
