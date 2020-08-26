import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Groupe } from 'src/app/models/groupe.module';
import { Utilisateur } from 'src/app/models/utilisateur.module';
import { GroupeService } from 'src/app/services/groupe.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-groupe',
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.scss']
})
export class AddGroupeComponent implements OnInit {

  users:Utilisateur[];

  groupeForm:FormGroup;  
  constructor( private router: Router ,private groupeservice:GroupeService, private userservice: UserService) { }

  ngOnInit(): void {
    alert("Welcom" + localStorage.getItem('nom'));
    this.init();
  }

  //init form
  init(){
    this.groupeForm = new FormGroup({
      nom: new FormControl('', Validators.required)
      
    });
   }

   onSubmit() {
   
    this.userservice.getUserByNomAndPrenom(localStorage.getItem('nom'),localStorage.getItem('prenom')).subscribe(
      (data) => {
        const groupe = new Groupe();
        groupe.nom = this.groupeForm.get('nom').value;
        /*let user = new Utilisateur();
        user = this.groupeForm.get('user').value;*/
        groupe.idUser = data.id; 
        this.groupeservice.addGroupe(groupe).subscribe(
          (data2)=>
          {
            alert(JSON.stringify(data2));
            
          }
        );
    
        alert('Bien enregistre ');
      }
    )
   
    //this.router.navigate(['list-user']);
}
}
