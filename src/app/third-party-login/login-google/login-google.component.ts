import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { Users } from '../models/user';

@Component({
  selector: 'login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.scss'],
})
export class LoginGoogleComponent implements OnInit {

  // custom events to emit response
  @Output() Success = new EventEmitter<Users>();
  @Output() failure = new EventEmitter();
  user: Users;
  failureObj: {loginFail: boolean, message: string};
  constructor(private authService: AuthService) {}

  // Google Login method
  signIn(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (socialUser: SocialUser) => {
        this.user = new Users(
          socialUser.provider,
          socialUser.id,
          socialUser.email,
          socialUser.name,
          socialUser.photoUrl,
          socialUser.authToken,
          socialUser.idToken
        );

        this.Success.emit(this.user); // emits user object
      },
      (err) => {
        this.failureObj = {loginFail: true, message: err};
        this.failure.emit(this.failureObj);
      }
    );
  }

  ngOnInit(): void {}
}
