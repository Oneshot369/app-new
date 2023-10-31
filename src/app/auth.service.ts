// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// TODO 1 Create a auth service with an observable
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /*
  A BehaviorSubject is a type of observable in RxJS. 
  It extends the capabilities of a standard observable by maintaining 
  and broadcasting the "current" value to all its subscribers. 
  
  */
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() {
    // You can implement the logic to check the user's authentication status here
    // For this example, we'll just initialize it with a default value of false.
  }

  login() {
    // Simulate a login action
    // In a real application, this would involve authenticating the user
    // and setting isAuthenticated accordingly.
    this.isAuthenticated.next(true);
  }

  logout() {
    // Simulate a logout action
    this.isAuthenticated.next(false);
  }

  getAuthenticationStatus(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}
