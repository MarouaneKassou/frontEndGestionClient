import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRoleComponent } from './Components/role/list-role/list-role.component';
import { AddRoleComponent } from './Components/role/add-role/add-role.component';
import { AddUserComponent } from './Components/user/add-user/add-user.component';
import { ListUserComponent } from './Components/user/list-user/list-user.component';
import { SearchUserComponent } from './Components/user/search-user/search-user.component';
import { AddClientComponent } from './Components/client/add-client/add-client.component';


const routes: Routes = [
  {path: 'list-role', component: ListRoleComponent },
  {path: 'add-role' , component: AddRoleComponent},
  {path: 'add-user' , component: AddUserComponent},
  {path: 'list-user' , component: ListUserComponent},
  {path: 'search-user' , component: SearchUserComponent},
  {path: 'add-client' , component: AddClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
