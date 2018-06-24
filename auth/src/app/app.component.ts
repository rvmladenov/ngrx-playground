import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from './reducers';
import { Logout } from './auth/auth.actions';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthState } from './auth/auth.reducer';
import { isLoggedIn, isLoggedOut } from './auth/auth.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(public router: Router, public store: Store<AppState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this
      .store
      .pipe(
        select(isLoggedIn)
      );

    this.isLoggedOut$ = this
      .store
      .pipe(
        select(isLoggedOut)
      );
  }

  logout() {
    this.store.dispatch(new Logout());
    this.router.navigateByUrl('login');
  }
}
