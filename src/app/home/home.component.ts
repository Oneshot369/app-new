import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

// TODO 2 Modify 'home' to use the auth service and its observable
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getAuthenticationStatus().subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  toggleAuth() {
    if (this.isLoggedIn) {
      this.authService.logout();
    } else {
      this.authService.login();
    }
  }
}
