import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { UserService } from "../../services/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: [ './auth-popup.component.css' ]
})
export class AuthPopupComponent implements OnInit {

  login: string = "admin";
  password: string = "qwerty";
  error: string = "";

  constructor(
    public dialogRef: MatDialogRef<AuthPopupComponent>,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.fetchAuth(this.login, this.password);
    const snackRef = this._snackBar.open(`Welcome ${this.login}`, "Next");
    snackRef.onAction().subscribe(() => {
      this.dialogRef.close();
    })
  }
}
