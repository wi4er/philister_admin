import { Component, Inject, OnInit } from '@angular/core';
import {
  AddPropertyItemGQL, GetPropertyEditGQL, GetPropertyIdGQL,
  Property,
  PropertyInput,
  PropertyPropertyInput, UpdatePropertyItemGQL
} from "../../../graph/types";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: [ './property-form.component.css' ]
})
export class PropertyFormComponent implements OnInit {

  id: string = '';
  created_at: string = '';
  updated_at: string = '';

  propertyList: Property[] = [];
  editValues: { [field: string]: string } = {};

  constructor(
    private addItemMutation: AddPropertyItemGQL,
    private updateItemMutation: UpdatePropertyItemGQL,
    private dialogRef: MatDialogRef<PropertyFormComponent>,
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

  toInput(): PropertyInput {
    const addition: PropertyInput = {
      id: this.id,
      property: [],
    } as PropertyInput;

    for (const key in this.editValues) {
      addition.property?.push({
        value: this.editValues[key],
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
