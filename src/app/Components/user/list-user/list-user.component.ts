import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Utilisateur } from '../../../models/utilisateur.module';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users:Utilisateur[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.userService.getUser().subscribe(
      (data) => {
        this.users = data;
        console.table(data);
      },(er)=> {
        console.log(er);
      }
    );
}
deleteUser(utilisateur:Utilisateur){
  //delete from dataBase
  this.userService.deleteUser(utilisateur);

  //delete inMemory
  const index = this.getIndexUserById(utilisateur);
  this.deleteUserByIndex(index);
}

getIndexUserById(utilisateur:Utilisateur){
  return this.users.indexOf(this.users.find(it=> it.id == utilisateur.id));
}
deleteUserByIndex(index:any){
  this.users.splice(index,1);
}


}
