import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { SocialUsers } from '../models/socialusers.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  logout(){
    //Logout and clearing locl storage
    this.authService.signOut();
    localStorage.removeItem('socialusers');
    localStorage.removeItem('token');
    localStorage.clear();

    // redirecting to the same page itself so that authguard can be checked again
    this.router.navigateByUrl('/temphome', { skipLocationChange: true 
    }).then(() => {
    this.router.navigate([''])});
  }

}
