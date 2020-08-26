import { Component, OnInit } from '@angular/core';
import { GroupeService } from 'src/app/services/groupe.service';
import { Groupe } from 'src/app/models/groupe.module';

@Component({
  selector: 'app-list-groupe',
  templateUrl: './list-groupe.component.html',
  styleUrls: ['./list-groupe.component.scss']
})
export class ListGroupeComponent implements OnInit {

  groupes:Groupe[];

  constructor(private groupeService:GroupeService) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.groupeService.getGroupes().subscribe(
      (data) => {
        this.groupes = data;
        console.table(data);
      },(er)=> {
        console.log(er);
      }
    );
}
deleteGroupe(groupe:Groupe){
  //delete from dataBase
  this.groupeService.deleteGroupeById(groupe);

  //delete inMemory
  const index = this.getIndexGroupeById(groupe);
  this.deleteGroupeByIndex(index);
}

getIndexGroupeById(groupe:Groupe){
  return this.groupes.indexOf(this.groupes.find(it=> it.id == groupe.id));
}
deleteGroupeByIndex(index:any){
  this.groupes.splice(index,1);
}

}
