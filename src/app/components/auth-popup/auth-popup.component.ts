import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: [ './auth-popup.component.css' ]
})
export class AuthPopupComponent implements OnInit {

  login: String = ""
  password: String = ""

  constructor(
    public dialogRef: MatDialogRef<AuthPopupComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  ngOnInit(): void {
  }


  onClose() {
    this.dialogRef.close();
  }

}
