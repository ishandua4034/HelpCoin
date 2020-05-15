import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { LoginAuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    
    constructor(private authService: LoginAuthService, private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        let token=localStorage.getItem('token');
        req = req.clone({setHeaders: {
            'content-Type': 'application/json',
            Authrization : `JWT ${token}`
            //Here we can attach token as per the API we are using
        }});
        if(req.url=='http://localhost:3000/user'){
            return next.handle(req);
        }
        
        return next.handle(req).pipe(tap(()=>{},
        (err: any)=>{
            if(err.status != 401){
                const currentUrl =this.router.routerState.snapshot.url;
                this.router.navigate(['/login'],{ queryParams: { returnUrl: currentUrl }});
            }else{
                console.log(err.status);
                return;
            }
        }));
    }
}