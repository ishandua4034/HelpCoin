import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserLoginAvatarComponent } from "./user-login-avatar/user-login-avatar.component";
import { MaterialModule } from "../material/material.module";



@NgModule({
  declarations: [UserLoginAvatarComponent, UserProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [UserLoginAvatarComponent, UserProfileComponent]
})
export class UserInfoModule { }
