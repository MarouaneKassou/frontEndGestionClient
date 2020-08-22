import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role.module';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit {
  roles:Role[];
  constructor(private roleservice:RoleService) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
       this.roleservice.getRoles().subscribe(
         (data) => {
           this.roles = data;
         },(er)=> {
           console.log(er);
         }
       );
  }

  deleteRole(role:Role){
    //delete from dataBase
    this.roleservice.deleteRoleById(role);
    
    //delete inMemory
    const index = this.getIndexRoleById(role);
    this.deleteRoleByIndex(index);
  }

  getIndexRoleById(role:Role){
    return this.roles.indexOf(this.roles.find(it=> it.id == role.id));
  }
  deleteRoleByIndex(index:any){
    this.roles.splice(index);
  }

}
