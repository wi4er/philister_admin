import { Component, OnInit } from '@angular/core';
import { AuthPopupComponent } from "../../components/auth-popup/auth-popup.component";
import { MatDialog } from "@angular/material/dialog";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.css']
})
export class RootPageComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  openPopup(): void {
    this.dialog.open(AuthPopupComponent, {
      width: '250px',
    });
    console.log("OPEN")
  }

  authUser(): void {
    this.userService.fetchAuth();
  }

}
