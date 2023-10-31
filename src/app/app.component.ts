import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-new';
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
