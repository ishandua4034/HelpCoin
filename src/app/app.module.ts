import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThirdPartyLoginModule } from './third-party-login/third-party-login.module';
import { LoginformComponent } from './loginform/loginform.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { UserInfoModule } from './user-info/user-info.module';
import { UserService } from './services/user.service';
import { LoginAuthService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    TestcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThirdPartyLoginModule,
    HttpClientModule,
    UserInfoModule
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
