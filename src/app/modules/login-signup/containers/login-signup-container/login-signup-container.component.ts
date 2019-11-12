import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-signup-container',
  templateUrl: './login-signup-container.component.html',
  styleUrls: ['./login-signup-container.component.scss']
})
export class LoginSignupContainerComponent implements OnInit {

  sideDetails: any;
  isLogin = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.sideDetails = {
      img: '../../../../../assets/img/signup-image.png',
      linkTitle: 'Create an account',
      linkAddress: '/signup'
    };
  }

  togglePage() {
    this.changeRoute();
    if (this.isLogin) {
      this.sideDetails = {
        img: '../../../../../assets/img/signin-image.png',
        linkTitle: 'I am already member',
        linkAddress: '/login'
      };
    } else {
      this.sideDetails = {
        img: '../../../../../assets/img/signup-image.png',
        linkTitle: 'Create an account',
        linkAddress: '/signup'
      };
    }
    this.isLogin = !this.isLogin;
  }

  changeRoute() {
    this.router.navigate([this.sideDetails.linkAddress]);
  }

}
