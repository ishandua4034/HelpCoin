export class LoggedUserData{
    userName: string;
    imgUrl: string;
    email: string;
     
    constructor(userName: string, imgUrl: string, email: string){
        this.userName = userName;
        this.imgUrl = imgUrl;
        this.email = email;
    }
}