import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from "@angular/common/http";
import { LoginAuthService } from "./login.service";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

// Response Interceptor to check User authorization

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  baseUrl = environment.baseUrl;
  constructor(private authService: LoginAuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = localStorage.getItem("token");
    req = req.clone({
      setHeaders: {
        "content-Type": "application/json",
        Authrization: `JWT ${token}`, // attaching token as per the API we are using
      },
    });

    // ignoring interceptor if HTTPrequest is login Request
    if (req.url === this.baseUrl + "/user") {
      return next.handle(req);
    }

    return next.handle(req).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err.status !== 401) {
            const currentUrl = this.router.routerState.snapshot.url;
            this.router.navigate(["/login"], {
              queryParams: { returnUrl: currentUrl },
            });
          } else {
            console.log(err.status);
            return;
          }
        }
      )
    );
  }
}
