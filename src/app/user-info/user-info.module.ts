import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileDetailComponent } from './user-profile-detail/user-profile-detail.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [UserProfileComponent, UserProfileDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [UserProfileComponent, UserProfileDetailComponent]
})
export class UserInfoModule { }
