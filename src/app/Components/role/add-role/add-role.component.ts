import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role.module';
import { JsonFormatter } from 'tslint/lib/formatters';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  
  //Forms
  roleForm: FormGroup;
  //Instance services
  constructor(private roleService: RoleService,
              private router: Router ) { }

  ngOnInit(): void {
    this.init();
  }

  //init form
  init(){
    this.roleForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
      const role = new Role();
      role.nom = this.roleForm.get('name').value;
      this.roleService.addRole(role).subscribe(
        (data)=>
        {
          JSON.stringify(data);
        }
      )
      alert('Bien enregistre ');
      this.router.navigate(['list-role']);
    
  }
}