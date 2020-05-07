import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginGoogleComponent } from './third-party-login/login-google/login-google.component';
import { LoginformComponent } from './loginform/loginform.component';


const routes: Routes = [
   { path: '', component:LoginformComponent},
  // { path: 'login', component:LoginGoogleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
