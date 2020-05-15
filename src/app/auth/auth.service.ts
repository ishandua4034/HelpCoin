import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { SocialUsers } from '../models/socialusers.model';
import { Subject, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

//interface to save get the responce in interface type. Interface is simmilar to locla model
export interface AuthResponseData{
    provider: string;
    id: string;
    email: string;
    name: string;
    imageUrl: string;
    token: string;
    idToken: string;
}

@Injectable({providedIn: 'root'})
export class LoginAuthService{

    currentUrl = '/'; //set url on load in everypage to keep a track of in every http request
    constructor(private http: HttpClient){}
    
    login(user: SocialUser){
        // posting the socialUser as local model social user
        const socialUser= new SocialUsers(user.provider,user.id,user.email,user.name,user.photoUrl,user.authToken,user.idToken);
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(socialUser);

        return this.http.post<AuthResponseData>('http://localhost:3000/user', body,{'headers':headers});
            
    }


}