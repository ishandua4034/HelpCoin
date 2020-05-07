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
  userData: LoggedUserData;
  private user: SocialUser;
  loggedIn= false;

  constructor(private authService: AuthService) { }

  signIn(): void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user: SocialUser)=>{
      this.userObj.emit(user);},
    (err)=>{console.log(err)});   
  } 

  signOut(): void {
    this.authService.signOut(true);
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      if(user){
      this.userData = new LoggedUserData(
                user.name, 
                user.photoUrl, 
                user.email
                );
      this.loggedIn=true;
      this.user=user; //user object saved in local variable user
      this.userObj.emit(user); //emits user object 
      }else{
        this.userData = new LoggedUserData('','','');
        this.loggedIn=false;
      }
    },(err)=>{alert('Error: ' + err);}) //alert if throws any error
    
  }

}
