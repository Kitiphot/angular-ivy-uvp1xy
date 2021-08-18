import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  UserName: any;
  ngOnInit() {}

  logOut(): void {
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      let data = params['UserName'];
      this.UserName = data; // Print the parameter to the console.
    });
  }
}
