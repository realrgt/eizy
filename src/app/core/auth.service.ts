import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  users: User[];

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.http.get<User[]>('http://localhost:8080/user')
      .pipe(
        tap(console.log),
        take(1)
      )
      .subscribe(docs => this.users = docs);
  }

  login(user: User) {
    if (user.username === 'rgt' && user.password === '1234' ) {
      this.loggedIn.next(true);
      this.router.navigate(['employees']);
    } else {
      alert('Usuario ou password errados');
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['']);
  }
}
