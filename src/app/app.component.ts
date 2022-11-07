import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";
import { MatDialog } from "@angular/material/dialog";
import { AuthPopupComponent } from "./components/auth-popup/auth-popup.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Philister Admin';

  ngOnInit() {
    this.userService.fetchMyself()
  }

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
  ) {
  }
}
