import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { LoggedUserData } from '../models/user.model';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.scss']
})
export class LoginGoogleComponent implements OnInit { 

  @Output() userObj = new EventEmitter<SocialUser>();  //custom event of this component created to emit user Object 
  
  constructor(private authService: AuthService) { }

  signIn(): void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user: SocialUser)=>{
      this.userObj.emit(user);},  //emits user object
    (err)=>{console.log("error inside login-goofle component 22: ",err)});   
  } 

  ngOnInit(): void {}

}
