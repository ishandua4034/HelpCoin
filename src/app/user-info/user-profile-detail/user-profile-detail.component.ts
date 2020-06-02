import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-user-profile-detail',
  templateUrl: './user-profile-detail.component.html',
  styleUrls: ['./user-profile-detail.component.scss'],
})
export class UserProfileDetailComponent implements OnInit {

  // custome property and event
  @Input() userProfile: { username: string; email: string; mobile: string };
  @Output() update = new EventEmitter<{username: string; email: string; mobile: string; }>();

  // local variables
  disabled = true;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  profileForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    // Custome Input hardcoded, will remove below line later
    this.userProfile = {username: 'Ishan Dua', email: 'ishan.dua@5826gmail.com', mobile: '9501940555'};

    // assigning Custome Input value to local variables
    this.getProfileDetails();

    // Reactive Form Controls
    this.profileForm = new FormGroup({
      formFirstName: new FormControl( this.firstName, Validators.required ),
      formLastName: new FormControl( this.lastName ),
      formEmail: new FormControl( this.email, [Validators.required, Validators.email]),
      formMobile: new FormControl( this.mobile, Validators.required)
    });
    this.profileForm.disable();
  }

  // function to enable/disable form
  onEdit() {
    this.profileForm.enable();
    this.disabled = !this.disabled;
  }

  // function to call mehtod of emmiting updated data and disabling form
  onSubmit() {
    this.setProfileDetails();
    this.profileForm.disable();
    this.disabled = !this.disabled;
  }

  // function to get profile Details from Input Element
  getProfileDetails() {
    const username = this.userProfile.username.split(' ');

    if (username.length > 1) {
      this.lastName = username.pop();
      this.firstName = username.join(' ');
    } else {
      this.lastName = '';
      this.firstName = this.userProfile.username;
    }
    this.email = this.userProfile.email;
    this.mobile = this.userProfile.mobile;
  }

  // function to update profile details to server || Currently HardCoded
  setProfileDetails() {
    this.firstName = this.profileForm.get('formFirstName').value;
    this.lastName = this.profileForm.get('formLastName').value;
    this.email = this.profileForm.get('formEmail').value;
    this.mobile = this.profileForm.get('formMobile').value;

    // code here to send data to server
    if (this.lastName !== '') {
      this.update.emit({
        username: this.firstName.concat(' ', this.lastName),
        email: this.email,
        mobile: this.mobile,
      });
    } else {
      this.update.emit({
        username: this.firstName,
        email: this.email,
        mobile: this.mobile,
      });
    }

    // to see updated value, we will remove this code later
    console.log(
      'name is ',
      this.firstName.concat(' ', this.lastName),
      ', email Id is ',
      this.email,
      ', Mobile No. is ',
      this.mobile
    );
  }
}
