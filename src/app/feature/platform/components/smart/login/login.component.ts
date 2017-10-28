import { AuthorizationService } from './../../../../../core/services/authorization.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.handleLogin();
  }

  handleLogin() {
    const isAuthorized = this.authorizationService.isAuthorized();
    isAuthorized
      ? this.router.navigate(['/dashboard'])
      : this.authorizationService.getParameters();
  }
}
