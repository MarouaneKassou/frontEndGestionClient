import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service'
import { from } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client.module';
import { Router } from '@angular/router';
import { Groupe } from 'src/app/models/groupe.module';
import { Rendez_Vous } from 'src/app/models/rendez_vous.module';
import { GroupeService } from '../../../services/groupe.service';
import { RendezVousService } from '../../../services/rendez-vous.service'

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  clientForm:FormGroup;
  Groupes : Groupe[];
  RDV : Rendez_Vous[];
  constructor(private clientService : ClientService ,  private router: Router ,private groupeservice:GroupeService,
              private rendez_vousService : RendezVousService) { }

  ngOnInit(): void {
    this.init();
    this.groupeservice.getGroupes().subscribe(
      (data)=> {
        this.Groupes = data;
      }
    )
    this.rendez_vousService.getRendezVous().subscribe(
      (data)=> {
        this.RDV = data;
      }
    )
  }

   //init form
   init(){
    this.clientForm = new FormGroup({
      cin: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      Groupe: new FormControl('', Validators.required),
      Rendez_vous: new FormControl('')
    });
   }

   onSubmit() {
      const client = new Client();
      client.cin = this.clientForm.get('cin').value;
      client.nom = this.clientForm.get('nom').value;
      client.prenom = this.clientForm.get('prenom').value;
      client.email = this.clientForm.get('email').value;
      client.adresse = this.clientForm.get('adresse').value;
      client.telephone = this.clientForm.get('telephone').value;
      let groupe = new Groupe();
      groupe = this.clientForm.get('Groupe').value;
      client.idGroupe = groupe.id; 
      let rendez_vous = new Rendez_Vous();
      rendez_vous = this.clientForm.get('Rendez_vous').value;
      client.idRdv = rendez_vous.id;
      
      this.clientService.addClient(client).subscribe(
        (data2)=>
        {
          alert(JSON.stringify(data2));
          
        }
      );

      alert('Bien enregistre ');
      //this.router.navigate(['list-user']);
    
  }
}

