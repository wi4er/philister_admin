import { Component, Inject, OnInit } from '@angular/core';
import { PropertyService } from "../../services/property.service";
import {
  AddPropertyItemGQL, GetPropertyEditGQL,
  GetPropertyListGQL,
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

  list: Property[] = [];
  id: string = '';
  values: { [field: string]: string } = {};

  constructor(
    private propertyService: PropertyService,
    private addItemMutation: AddPropertyItemGQL,
    private updateItemMutation: UpdatePropertyItemGQL,
    private dialogRef: MatDialogRef<PropertyFormComponent>,
    private getPropertyListQuery: GetPropertyListGQL,
    private getPropertyEditQuery: GetPropertyEditGQL,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
  ) {
  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.getPropertyEditQuery.fetch({ id: this.data?.id }).subscribe(res => {
        this.list = res.data?.property?.list as Property[];
        this.toValues(res.data.property.item as Property);
      });
    } else {
      this.getPropertyListQuery.fetch().subscribe(res => {
        this.list = res.data?.property?.list as Property[];
      });
    }
  }

  toValues(item: Property) {
    this.id = item.id;

    for (const prop of item?.property ?? []) {
      this.values[prop.property.id] = prop.value;
    }
  }

  toInput(): PropertyInput {
    const addition: PropertyInput = {
      id: this.id,
      property: [],
    } as PropertyInput;

    for (const key in this.values) {
      addition.property?.push({
        value: this.values[key],
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
