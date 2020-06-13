import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/models/user";

@Component({
  selector: "app-user-login-avatar",
  templateUrl: "./user-login-avatar.component.html",
  styleUrls: ["./user-login-avatar.component.scss"],

})
export class UserLoginAvatarComponent implements OnInit {

  @Input() userObj: User;
  @Input() avatarSize = 45;
  url: string = null;
  name: string;

  ngOnInit(): void {

    // assigning URL and name from UserObj to local variables
    this.name = this.userObj.name;
    if (this.userObj.imageUrl === "") {
      this.url = this.getInitials(this.name);
    }else{
      this.url = this.userObj.imageUrl;
    }

    // below is hardCoded URL and name we will remove it later
    // this.url = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    // this.name = 'Ishan Dua';
    // if (this.url == null) {
    //   this.url = this.getInitials(this.name);
    // }

  }

  // method to create URL of image with initials of first and last name
  getInitials(name: string){
    const canvas = document.createElement("canvas");
    canvas.style.display = "none";
    canvas.width = 128;
    canvas.height = 128;
    document.body.appendChild(canvas);
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "64px Arial";
    context.fillStyle = "white";
    const nameArray = name.split(" ");
    let initials = nameArray[0].substring(0, 1).toUpperCase();
    if (nameArray.length > 1){
      initials += nameArray[nameArray.length - 1].substring(0, 1).toUpperCase();
    }
    context.textAlign = "center";
    context.fillText(initials, 64, 85);
    const data = canvas.toDataURL();
    document.body.removeChild(canvas);
    return data;
  }
}
