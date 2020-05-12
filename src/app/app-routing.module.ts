import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginGoogleComponent } from './third-party-login/login-google/login-google.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ThirdPartyLoginModule } from './third-party-login/third-party-login.module';


const routes: Routes = [
    
   { path: '', redirectTo:'/home', pathMatch: 'full'},
   { path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
   { path: 'login', component:LoginformComponent},
   { path: 'temphome', component:HomeComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
