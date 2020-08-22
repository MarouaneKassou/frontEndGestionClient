import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRoleComponent } from './Components/role/add-role/add-role.component';
import { ListRoleComponent } from './Components/role/list-role/list-role.component';
import { AddUserComponent } from './Components/user/add-user/add-user.component';
import { ListUserComponent } from './Components/user/list-user/list-user.component';
import { RoleService } from './services/role.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { SearchUserComponent } from './Components/user/search-user/search-user.component';
import { AddClientComponent } from './Components/client/add-client/add-client.component';
import { ListClientComponent } from './Components/client/list-client/list-client.component';
import { AddCompteComponent } from './Components/compte/add-compte/add-compte.component';
import { ListCompteComponent } from './Components/compte/list-compte/list-compte.component';
import { AddDocumentComponent } from './Components/document/add-document/add-document.component';
import { ListDocumentComponent } from './Components/document/list-document/list-document.component';
import { AddGroupeComponent } from './Components/groupe/add-groupe/add-groupe.component';
import { ListGroupeComponent } from './Components/groupe/list-groupe/list-groupe.component';
import { AddHistoriqueComponent } from './Components/historique/add-historique/add-historique.component';
import { ListHistoriqueComponent } from './Components/historique/list-historique/list-historique.component';
import { AddRendezVousComponent } from './Components/rendez-vous/add-rendez-vous/add-rendez-vous.component';
import { ListRendezVousComponent } from './Components/rendez-vous/list-rendez-vous/list-rendez-vous.component';
import { SearchClientComponent } from './Components/client/search-client/search-client.component';
import { SearchDocumentComponent } from './Components/document/search-document/search-document.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRoleComponent,
    ListRoleComponent,
    AddUserComponent,
    ListUserComponent,
    SearchUserComponent,
    AddClientComponent,
    ListClientComponent,
    AddCompteComponent,
    ListCompteComponent,
    AddDocumentComponent,
    ListDocumentComponent,
    AddGroupeComponent,
    ListGroupeComponent,
    AddHistoriqueComponent,
    ListHistoriqueComponent,
    AddRendezVousComponent,
    ListRendezVousComponent,
    SearchClientComponent,
    SearchDocumentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [RoleService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
