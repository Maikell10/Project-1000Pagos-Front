import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  isLoggedIn: boolean = false;

  user: any;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();

    if (
      localStorage['user'] != 'undefined' &&
      localStorage['user'] != undefined
    ) {
      let user: any = localStorage.getItem('user');
      this.user = JSON.parse(user);
    }
  }

  ngDoCheck(): void {
    if (!this.isLoggedIn) {
      this.isLoggedIn = this.loginService.isLoggedIn();

      if (
        localStorage['user'] != 'undefined' &&
        localStorage['user'] != undefined
      ) {
        let user: any = localStorage.getItem('user');
        this.user = JSON.parse(user);
      }
    }
  }

  logout() {
    this.loginService.logOut();
    window.location.reload();
  }
}
