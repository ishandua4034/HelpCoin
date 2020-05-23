import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// interface to save get the responce in interface type. Interface is simmilar to locla model
export interface LoginResponseData{
    provider: string;
    id: string;
    email: string;
    name: string;
    imageUrl: string;
    token: string;
    idToken: string;
}

@Injectable()
export class LoginAuthService{

    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient){}

    // pushing user Object on server and getting response Object
    login(user){
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(user);
        return this.http.post<LoginResponseData>(this.baseUrl + '/user', body, {'headers': headers});
    }

}
