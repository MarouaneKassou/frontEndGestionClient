import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users:Utilisateur[];
  constructor(private userService: UserService,
              private router: Router) { }

  init() {
    this.loginForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (data) => {
        this.users = data;
      }
    )
    this.init();
  }

  onSubmit() {
    const nom = this.loginForm.get('nom').value;
    const prenom = this.loginForm.get('prenom').value;
    let user = new Utilisateur();
    this.userService.getUserByNomAndPrenom(nom,prenom).subscribe(
        (data) => {
          user = data;
          if ( user !== null) {
            localStorage.setItem('nom', user.nom);
            localStorage.setItem('prenom', user.prenom);
            alert("Welcom" + localStorage.getItem('nom'));
            this.router.navigate(['list-user'])
            .then(() => {
              window.location.reload();
            });
           } else {
            alert('user not exist');
          }
        }
    )
  }

}
