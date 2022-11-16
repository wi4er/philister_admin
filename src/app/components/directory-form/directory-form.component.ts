import { Component, Inject, OnInit } from '@angular/core';
import {
  AddDirectoryItemGQL, AddValueItemGQL,
  GetPropertyEditGQL,
  GetPropertyListGQL,
  Property, PropertyInput, PropertyPropertyInput, UpdateDirectoryItemGQL,
} from "../../../graph/types";
import { PropertyService } from "../../services/property.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";

@Component({
  selector: 'app-directory-form',
  templateUrl: './directory-form.component.html',
  styleUrls: ['./directory-form.component.css']
})
export class DirectoryFormComponent implements OnInit {

  list: Property[] = [];
  id: string = '';
  properties: { [field: string]: string } = {};
  values: Set<string> = new Set();

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  addOnBlur = true;

  constructor(
    private propertyService: PropertyService,
    private addMutation: AddDirectoryItemGQL,
    private addValueMutation: AddValueItemGQL,
    private updateMutation: UpdateDirectoryItemGQL,
    private dialogRef: MatDialogRef<DirectoryFormComponent>,
    private getPropertyListQuery: GetPropertyListGQL,
    private getPropertyEditQuery: GetPropertyEditGQL,
    @Inject(MAT_DIALOG_DATA) private data: { id: string },
  ) {
  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.id = this.data.id;

      this.getPropertyEditQuery.fetch({ id: this.data?.id }).subscribe(res => {
        this.list = res.data?.property?.list as Property[];
        // this.toValues(res.data.property.item as Property);
      });
    } else {
      this.getPropertyListQuery.fetch().subscribe(res => {
        this.list = res.data?.property?.list as Property[];
      });
    }
  }

  toValues(item: Property) {
    this.id = item.id;

    // for (const prop of item?.property ?? []) {
    //   this.values.a[prop.property.id] = prop.value;
    // }
  }

  toInput(): PropertyInput {
    const addition: PropertyInput = {
      id: this.id,
      property: [],
    } as PropertyInput;

    for (const key in this.properties) {
      addition.property?.push({
        value: this.properties[key],
        property: key
      } as PropertyPropertyInput);
    }

    return addition;
  }

  saveItem() {
    if (this.data?.id) {
      this.updateMutation.mutate({
        item: this.toInput(),
      }).subscribe(res => {
        this.dialogRef.close();
      });
    } else {
      this.addMutation.mutate({
        item: this.toInput(),
      }).subscribe(res => {
        for (const key of this.values) {
          this.addValueMutation.mutate({item: {
              id: key,
              directory: this.id,
            }}).subscribe(res => {

          });
        }

        this.dialogRef.close();
      });
    }
  }

  removeValue(value: string) {
    this.values.delete(value);
  }

  addValue(event: MatChipInputEvent) {
    const value = (event.value || '').trim();

    if (value) {
      this.values.add(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

}
