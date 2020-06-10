import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { LoginAuthService } from "../../services/login.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../../services/user.service";
import { User } from "../models/user";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginformComponent implements OnInit {

  @Input() config: {loginBtnName: string, cancelBtnName: string, showGoogleLogin: boolean,
                    showFacebookLogin: boolean, brandTitle: string, logo: string};
  @Output() loginData = new EventEmitter<{userName: string, password: string}>();

  returnUrl: string;
  loginFail = false;
  errorMessage: string;
  constructor(
    private authService: LoginAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  OnSignIn(user) {
    // service to post data on server. Saving response to local Storage
    this.loginFail = false;
    this.authService.login(user).subscribe(
      (res: any) => {
        this.userService.setData("activeusers", JSON.stringify(res));
        this.userService.setData("token", res.token);
        this.router.navigateByUrl(this.returnUrl);
      },
      (err) => {
        // storing the user object returned by Google as user model in local storage if data is already present on server
        if (err.status === 500) {
          this.userService.setData(
            "activeusers",
            JSON.stringify(
              new User(
                user.provider,
                user.id,
                user.email,
                user.name,
                user.imageUrl,
                user.token,
                user.idToken
              )
            )
          );
          this.userService.setData("token", user.authToken);
          this.router.navigateByUrl(this.returnUrl); // returning back to the page from where this page was routed
        } else {
          console.log("login form component error at line 20: ", err);
        }
      }
    );
  }

  OnLoginFail(object){
    this.loginFail = object.loginFail;
    this.errorMessage = object.message;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.returnUrl = params["returnUrl"];
    });
  }
}
