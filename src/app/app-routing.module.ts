import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';


const routes: Routes = [
    
   { path: '', redirectTo:'/home', pathMatch: 'full'},
   { path: 'home', component:HomeComponent, canActivate: [AuthGuard]}, 
   { path: 'login', component:LoginformComponent},
   { path: 'temphome', component:HomeComponent}, 
   { path: 'userlist', component:TestcomponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
