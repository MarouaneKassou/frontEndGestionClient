import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { Utilisateur } from '../../../models/utilisateur.module';
import { Role } from '../../../models/role.module';
import { RoleService } from '../../../services/role.service';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  roles:Role[];
 //Forms
 userForm: FormGroup;
 //Instance services
 constructor(private userservice: UserService,private roleService: RoleService,
             private router: Router ) { }

ngOnInit(): void {
    this.init();
    this.roleService.getRoles().subscribe(
      (data)=> {
        this.roles = data;
      }
    )
  }

  //init form
  init(){
    this.userForm = new FormGroup({
      cin: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      role: new FormControl('',Validators.required)
    });
  }

  onSubmit() {
      const user = new Utilisateur();
      user.cin = this.userForm.get('cin').value;
      user.nom = this.userForm.get('nom').value;
      user.prenom = this.userForm.get('prenom').value;
      user.email = this.userForm.get('email').value;
      user.adresse = this.userForm.get('adresse').value;
      user.telephone = this.userForm.get('telephone').value;
      let role = new Role();
      role = this.userForm.get('role').value;
      user.idRole = role.id; 
          this.userservice.addUser(user).subscribe(
            (data2)=>
            {
              alert(JSON.stringify(data2));
            }
          );
       
      
      alert('Bien enregistre ');
      this.router.navigate(['list-user']);
    
  }
}
