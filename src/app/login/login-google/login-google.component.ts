import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { AuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { User } from "../models/user";



@Component({
  // tslint:disable-next-line:component-selector
  selector: "login-google",
  templateUrl: "./login-google.component.html"
})
export class LoginGoogleComponent {

  // custom events to emit response
  // tslint:disable-next-line:no-output-native
  @Output() success = new EventEmitter<User>();
  @Output() failure = new EventEmitter();
  @Input() btnName = "Login With Google";

  user: User;
  failureObj: {loginFail: boolean, message: string};
  constructor(private authService: AuthService) {}

  // Google Login method
  signIn(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (socialUser: SocialUser) => {
        this.user = new User(
          socialUser.provider,
          socialUser.id,
          socialUser.email,
          socialUser.name,
          socialUser.photoUrl,
          socialUser.authToken,
          socialUser.idToken
        );

        this.success.emit(this.user); // emits user object
      },
      (err) => {
        this.failureObj = {loginFail: true, message: err};
        this.failure.emit(this.failureObj);
      }
    );
  }

}
