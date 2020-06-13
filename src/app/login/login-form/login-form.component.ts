import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder, FormGroupDirective, NgForm } from "@angular/forms";
import { User } from "../models/user";
import { LoginFormConfig } from "../models/login-form-config";
import { ErrorStateMatcher } from "@angular/material/core";

// Error when invalid control is dirty, or submitted.
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!((control.dirty || isSubmitted) && control.invalid && control);
  }
}

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginformComponent implements OnInit {

  // Custom property and event
  @Input() config: LoginFormConfig = new LoginFormConfig();
  @Input() isLoggedIn = true;
  @Input() isSignedUp = true;
  @Output() loginData = new EventEmitter<{username: string, password: string}>();
  @Output() signUpData = new EventEmitter<{username: string, password: string}>();
  @Output() socialUserObj = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<void>();

  // Local variables
  loginForm: FormGroup;
  signUpForm: FormGroup;
  username: string;
  password: string;
  userObj: User;
  errorMessage: string;
  loginFail = false;
  signIn = true;
  matcher: MyErrorStateMatcher;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Reactive form controls
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });

    this.signUpForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
    }, { validator: this.MatchPassword });

    // Initiating custom error property
    this.matcher = new MyErrorStateMatcher();
  }

  // emit login Data if form is valid
  onSubmit(){
    if (this.loginForm.valid) {
      this.username = this.loginForm.get("username").value;
      this.password = this.loginForm.get("password").value;
      this.loginData.emit({username: this.username, password: this.password});
    }
  }

  // emits signp Data if signUpForm is Valid
  onSignUp(){
    if (this.signUpForm.valid) {
      this.username = this.signUpForm.get("username").value;
      this.password = this.signUpForm.get("password").value;
      this.signUpData.emit({username: this.username, password: this.password});
    }
  }

  // emits User Object on social Login
  onSignIn(user) {
    this.loginFail = false;
    this.userObj = new User(
      user.provider,
      user.id,
      user.email,
      user.name,
      user.imageUrl,
      user.token,
      user.idToken
    );

    this.socialUserObj.emit(this.userObj);
  }

  // handels Social Login Fail
  OnLoginFail(object){
    this.loginFail = object.loginFail;
    this.errorMessage = object.message;
  }

  // triggers cancel observable
  onCancel(){
    console.log(this.signUpForm.get("password").errors);
    this.cancel.emit();
  }

  // navigates to same page and swichtes between signIn and SignUp
  navigate(){
    this.signIn = !this.signIn;
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
   });
  }

  // matchPassword Custom Validator
  MatchPassword(control: AbstractControl) {
    const password = control.get("password").value;
    const confirmPassword = control.get("confirmPassword").value;
    if (password !== confirmPassword) {
      control.get("confirmPassword").setErrors({ ConfirmPassword: true });
    }
    else {
      return null;
    }
  }

}
