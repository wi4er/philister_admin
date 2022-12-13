import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Philister Admin';

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.userService.fetchMyself()
  }

}
