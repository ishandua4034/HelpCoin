import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { LoginAuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    // this class is not yet implimented in process
    constructor(private authService: LoginAuthService, private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler){

        // req=req.clone({
        //     setHeaders: {
        //         Authorization: `Bearer ${this.authService.getToken()}`
        //     }
        // });
        
        return next.handle(req).pipe(catchError(err => {
            if(err.status === 401){
                this.router.navigate(['/login']);
            }
            return throwError(err);
        }));
    }
}