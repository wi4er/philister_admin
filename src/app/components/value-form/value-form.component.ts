import { Component, Inject, OnInit } from '@angular/core';
import {
  AddPropertyItemGQL,
  GetPropertyIdGQL, GetValueEditGQL,
  Property, PropertyInput, PropertyPropertyInput,
  UpdatePropertyItemGQL, Value
} from "../../../graph/types";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-value-form',
  templateUrl: './value-form.component.html',
  styleUrls: ['./value-form.component.css']
})
export class ValueFormComponent implements OnInit {

  id: string = '';
  created_at: string = '';
  updated_at: string = '';

  propertyList: Property[] = [];
  editValues: { [field: string]: string } = {};

  constructor(
    private addItemMutation: AddPropertyItemGQL,
    private updateItemMutation: UpdatePropertyItemGQL,
    private dialogRef: MatDialogRef<ValueFormComponent>,
    private getPropertyListQuery: GetPropertyIdGQL,
    private getValueEditQuery: GetValueEditGQL,
    @Inject(MAT_DIALOG_DATA) public data: { id: string } | null,
  ) {
  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.getValueEditQuery.fetch(
        { id: this.data?.id },
        { fetchPolicy: 'no-cache' }
      ).subscribe(res => {
        this.propertyList = res.data?.property?.list as Property[];
        this.toValues(res.data.value.item as Value);
      });
    } else {
      this.getPropertyListQuery.fetch(
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

  toValues(item: Value) {
    this.id = item.id;
    this.created_at = item.created_at;
    this.updated_at = item.updated_at;

    for (const prop of item?.propertyList ?? []) {
      this.editValues[prop.property.id] = prop.string;
    }
  }

  toInput(): PropertyInput {
    const addition: PropertyInput = {
      id: this.id,
      property: [],
      flag: [],
    } as PropertyInput;

    for (const key in this.editValues) {
      addition.property?.push({
        string: this.editValues[key],
        property: key
      } as PropertyPropertyInput);
    }

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
