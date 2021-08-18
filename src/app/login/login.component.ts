import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}

  ClickL() {
    // console.log(this.UserName);
  }
  onLogin(UserName) {
    console.log(UserName);
    if (UserName.value != '') {
      this.router.navigate(['/user/' + UserName.value]);
    } else {
      alert('Please enter UserName');
    }
  }
  // getURL(UserName) {
  //   console.log(UserName);
  //   return '/user/' + UserName.value;
  // }
}
