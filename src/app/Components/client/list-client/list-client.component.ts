import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.module';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {
  clients:Client[];

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.clientService.getClients().subscribe(
      (data) => {
        this.clients = data;
        console.table(data);
      },(er)=> {
        console.log(er);
      }
    );
}
deleteClient(client:Client){
  //delete from dataBase
  this.clientService.deleteClientById(client);

  //delete inMemory
  const index = this.getIndexClientById(client);
  this.deleteClientByIndex(index);
}

getIndexClientById(client:Client){
  return this.clients.indexOf(this.clients.find(it=> it.id == client.id));
}
deleteClientByIndex(index:any){
  this.clients.splice(index,1);
}
}
