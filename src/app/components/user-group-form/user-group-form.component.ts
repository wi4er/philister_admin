import { Component, Inject, OnInit } from '@angular/core';
import {
  AddUserItemGQL,
  GetPropertyEditGQL,
  GetPropertyIdGQL,
  Property,
  UpdateUserGQL,
  UserInput
} from "../../../graph/types";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-user-group-form',
  templateUrl: './user-group-form.component.html',
  styleUrls: ['./user-group-form.component.css']
})
export class UserGroupFormComponent implements OnInit {

  id: string = '';
  created_at: string = '';
  updated_at: string = '';

  propertyList: Property[] = [];
  editValues: { [field: string]: string } = {};

  constructor(
    private addItemMutation: AddUserItemGQL,
    private updateItemMutation: UpdateUserGQL,
    private dialogRef: MatDialogRef<UserGroupFormComponent>,
    private getListQuery: GetPropertyIdGQL,
    private getPropertyEditQuery: GetPropertyEditGQL,
    @Inject(MAT_DIALOG_DATA) public data: { id: string } | null,
  ) {
  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.getPropertyEditQuery.fetch(
        { id: this.data?.id },
        { fetchPolicy: 'no-cache' }
      ).subscribe(res => {
        this.propertyList = res.data?.property?.list as Property[];
        this.toValues(res.data.property.item as Property);
      });
    } else {
      this.getListQuery.fetch(
        {},
        { fetchPolicy: 'no-cache' }
      ).subscribe(res => {
        this.propertyList = res.data?.property?.idList as Property[];
      });
    }
  }


  getPropertyCount() {
    return Object.keys(this.editValues).length
  }

  toValues(item: Property) {
    this.id = item.id;
    this.created_at = item.created_at;
    this.updated_at = item.updated_at;

    for (const prop of item?.property ?? []) {
      this.editValues[prop.property.id] = prop.value;
    }
  }

  toInput(): UserInput {
    const addition: UserInput = {
      id: +this.id,
      login: '213',
      property: [],
      contact: [],
    } as UserInput;

    return addition;
  }

  saveItem() {
    if (this.data?.id) {
      this.updateItemMutation.mutate({
        item: this.toInput(),
      }).subscribe(res => {
        this.dialogRef.close();
      });
    } else {
      this.addItemMutation.mutate({
        item: this.toInput(),
      }).subscribe(res => {
        this.dialogRef.close();
      });
    }
  }

}
