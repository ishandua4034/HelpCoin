import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { SocialUsers } from '../models/socialusers.model';
import { Subject, throwError } from 'rxjs';
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

    user = new Subject<SocialUsers>();
    constructor(private http: HttpClient){}
    
    login(user: SocialUser){
        // posting the socialUser as local model social user
        const socialUser= new SocialUsers(user.provider,user.id,user.email,user.name,user.photoUrl,user.authToken,user.idToken);
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(socialUser);

        return this.http.post<AuthResponseData>('http://localhost:3000/user', body,{'headers':headers}
        ).pipe(catchError(error => 
            {return throwError(error)}),
            tap(resData =>{
                const user = new SocialUsers(
                    resData.provider,
                    resData.id,
                    resData.email,
                    resData.name,
                    resData.imageUrl,
                    resData.token,
                    resData.idToken);

                this.user.next(user);
            }));
            
    }


}