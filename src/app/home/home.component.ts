import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  logout() {
    // Logout and clearing local storage
    this.authService.signOut();
    this.userService.clearData();

    // redirecting to the same page after Logout
    this.router
      .navigateByUrl('/temphome', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['']);
      });
  }
}
