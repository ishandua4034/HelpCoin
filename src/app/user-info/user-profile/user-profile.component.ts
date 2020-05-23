import { Component, OnInit } from '@angular/core';
import { ɵNAMESPACE_URIS } from '@angular/platform-browser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],

})
export class UserProfileComponent implements OnInit {

  url: string = null;
  name: string;
  size = '57';
  constructor() { }

  ngOnInit(): void {
    // url and name will be fetched using API currently hard coded
    this.url = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    this.name = 'Ishan Dua';
    if (this.url === null) {
      this.url = this.getInitials(this.name);
    }
  }

  // method to create URL of image with initials of first and last name
  getInitials(name: string){
    const canvas = document.createElement('canvas');
    canvas.style.display = 'none';
    canvas.width = 128;
    canvas.height = 128;
    document.body.appendChild(canvas);
    const context = canvas.getContext('2d');
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = '64px Arial';
    context.fillStyle = 'white';
    const nameArray = name.split(' ');
    let initials = nameArray[0].substring(0, 1).toUpperCase();
    if (nameArray.length > 1){
      initials += nameArray[nameArray.length - 1].substring(0, 1).toUpperCase();
    }
    context.textAlign = 'center';
    context.fillText(initials, 64, 85);
    const data = canvas.toDataURL();
    document.body.removeChild(canvas);
    return data;
  }

}
