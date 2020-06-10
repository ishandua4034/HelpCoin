import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { TestcomponentComponent } from "./testcomponent/testcomponent.component";
import { UserInfoModule } from "./user-info/user-info.module";
import { UserService } from "./services/user.service";
import { LoginAuthService } from "./services/login.service";
import { AuthGuard } from "./services/auth.guard";
import { PollComponent } from "./poll/poll.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestcomponentComponent,
    PollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    UserInfoModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  },
  UserService,
  LoginAuthService,
  AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
