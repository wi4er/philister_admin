import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { UserService } from "../../services/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "../../../graph/types";

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-form.component.html',
  styleUrls: [ './auth-form.component.css' ]
})
export class AuthFormComponent implements OnInit {

  login: string = "admin";
  password: string = "qwerty";
  error: string = "";

  constructor(
    public dialogRef: MatDialogRef<AuthFormComponent>,
    private userService: UserService,
    private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
  }

  private handleUser(user: User) {
    if (user === null) {
      this._snackBar.open(
        `Wrong login or password`,
        "X",
        {
          duration: 3000,
        }
      );
    } else {
      const snackRef = this._snackBar.open(
        `Welcome ${this.login}`,
        "Next",
        {
          duration: 1000,
        }
      );
      snackRef.afterOpened().subscribe(() => {
        setTimeout(() => {
          this.dialogRef.close();
        }, 1500);
      });
      snackRef.onAction().subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  onSubmit() {
    this.userService.fetchAuth(this.login, this.password)
      .then(user => this.handleUser(user));
  }
}
