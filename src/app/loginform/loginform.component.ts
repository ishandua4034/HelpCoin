import { Component, OnInit,  NgZone } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { LoginAuthService } from '../auth/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SocialUsers } from '../models/socialusers.model';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit{
  
  returnUrl: string;
  constructor(private authService: LoginAuthService,private route: ActivatedRoute, private router: Router) { }

  OnSignIn(user: SocialUser){
    // service to to post data on server. Saving response to local Storage
    this.authService.login(user).subscribe((res:any) => {
      localStorage.setItem('socialusers', JSON.stringify(res));
      localStorage.setItem('token',res.token);
      this.router.navigateByUrl(this.returnUrl);
    }, err=>{   // storing the socialUser object returned by Google as socialuser model in local storage if data is already present on server
      if(err.status==500){ 
        localStorage.setItem('socialusers', JSON.stringify(new SocialUsers(user.provider,user.id,user.email,user.name,user.photoUrl,user.authToken,user.idToken)));
        localStorage.setItem('token',user.authToken);
        this.router.navigateByUrl(this.returnUrl);  //returning back to the page from where this page was routed
      }else{
        console.log("login form component error at line 20: ", err);
      }
      });
  }

  ngOnInit(){
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.route.queryParams.subscribe((params: Params)=>{
      this.returnUrl=params['returnUrl'] ;
    })
    
  }

}
