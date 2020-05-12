import { CanActivate, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginAuthService } from './auth.service';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

    token: string;
    constructor(private authService: LoginAuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    | boolean 
    | UrlTree
    | Promise<boolean | UrlTree> 
    | Observable<boolean | UrlTree>{

        this.token=localStorage.getItem('token');
        if (!!this.token){
            return true;
        }else{
            return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url }});
        }

    }
}