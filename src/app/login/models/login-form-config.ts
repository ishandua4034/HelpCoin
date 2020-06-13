export class LoginFormConfig {
  loginBtnName: string;
  signUpBtnName: string;
  cancelBtnName: string;
  showGoogleLogin: boolean;
  showFacebookLogin: boolean;
  brandTitle: string;
  logo: string;

  // initialization with default values
  constructor(
    loginBtnName: string = "Sign In",
    signUpBtnName: string = "Sign Up",
    cancelBtnName: string = "Cancel",
    showGoogleLogin: boolean = true,
    showFacebookLogin: boolean = false,
    brandTitle: string = "HelpCoin",
    logo: string = "https://images.squarespace-cdn.com/content/v1/5acac803f93fd493b449ddbf/1535253662248-HT0TAKSQA8PZ1SD7XG0A/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI7Hk5b7wKtplcrxPf3ag-g6VC0ObVEO8cEICumLtlwuA/person.png"
  ) {
    this.loginBtnName = loginBtnName;
    this.signUpBtnName = signUpBtnName;
    this.cancelBtnName = cancelBtnName;
    this.brandTitle = brandTitle;
    this.logo = logo;
    this.showGoogleLogin = showGoogleLogin;
    this.showFacebookLogin = showFacebookLogin;
  }
}
