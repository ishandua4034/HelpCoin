import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { UserProfileComponent } from './user-info/user-profile/user-profile.component';
import { UserProfileDetailComponent } from './user-info/user-profile-detail/user-profile-detail.component';
import { PollComponent } from './poll/poll.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginformComponent },
  { path: 'temphome', component: HomeComponent },
  { path: 'userlist', component: TestcomponentComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'userprofiledetail', component: UserProfileDetailComponent},
  { path: 'poll', component: PollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
