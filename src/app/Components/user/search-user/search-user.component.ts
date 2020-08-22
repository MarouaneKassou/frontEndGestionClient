import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Utilisateur } from 'src/app/models/utilisateur.module';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  users : Utilisateur[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    
  }

  searchByKeyword(keyword: string){
    this.userservice.getByKeyword(keyword).subscribe(
      (data) => {
        this.users = data;
      }
    );
  }
   keyup(event){
     this.searchByKeyword(event);
   }

}
