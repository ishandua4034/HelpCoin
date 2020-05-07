import { Component } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent{
  
  user: string='User';
  constructor() { }

  OnSignIn(user: SocialUser){
    this.user=user.name;
    console.log("Hello");
  }

}
