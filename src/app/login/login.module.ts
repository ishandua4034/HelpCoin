import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginGoogleComponent } from "./login-google/login-google.component";
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angularx-social-login";
import { configuration } from "./config";
import { LoginformComponent } from "./login-form/login-form.component";
import { MaterialModule } from "../material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

const googleClientId = configuration.googleClientId;

const config = new AuthServiceConfig([{
  id: GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider(googleClientId)
}]);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [LoginGoogleComponent, LoginformComponent],
  imports: [
    CommonModule,
    SocialLoginModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }],
  exports: [LoginGoogleComponent, LoginformComponent ],

})
export class LoginModule { }
