import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: [ './root-page.component.css' ]
})
export class RootPageComponent implements OnInit {

  constructor(
    public userService: UserService,
  ) {
  }

  get user() {
    return this.userService?.user
  }

  ngOnInit(): void {}


  send() {
    this.userService.fetchMyself()
  }

}
