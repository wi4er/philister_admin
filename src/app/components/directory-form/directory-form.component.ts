import { Component, Inject, OnInit } from '@angular/core';
import {
  AddDirectoryItemGQL, AddValueItemGQL, Directory, DirectoryInput, DirectoryPropertyInput, GetDirectoryEditGQL,
  GetPropertyListGQL,
  Property, UpdateDirectoryItemGQL,
} from "../../../graph/types";
import { PropertyService } from "../../services/property.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";

@Component({
  selector: 'app-directory-form',
  templateUrl: './directory-form.component.html',
  styleUrls: [ './directory-form.component.css' ]
})
export class DirectoryFormComponent implements OnInit {

  id: string = '';
  created_at: string = '';
  updated_at: string = '';
  version: number = 0;

  current?: Directory;

  propertyList: Property[] = [];
  propertyEdit: { [field: string]: string } = {};
  editValues: Set<string> = new Set();

  readonly separatorKeysCodes = [ ENTER, COMMA ] as const;
  addOnBlur = true;

  constructor(
    private propertyService: PropertyService,
    private addMutation: AddDirectoryItemGQL,
    private addValueMutation: AddValueItemGQL,
    private updateMutation: UpdateDirectoryItemGQL,
    private dialogRef: MatDialogRef<DirectoryFormComponent>,
    private getPropertyListQuery: GetPropertyListGQL,
    private getDirectoryEditQuery: GetDirectoryEditGQL,
    @Inject(MAT_DIALOG_DATA) public data: { id: string } | null,
  ) {
  }

  getPropertyCount() {
    return Object.keys(this.propertyEdit).length
  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.id = this.data.id;

      this.getDirectoryEditQuery.fetch({ id: this.id }).subscribe(res => {
        this.current = res.data.directory.item as Directory;

        this.propertyList = res.data.property.list as Property[];
        this.toValues(this.current);
      });
    } else {
      this.getPropertyListQuery.fetch().subscribe(res => {
        this.propertyList = res.data?.property?.list as Property[];
      });
    }
  }

  toValues(item: Directory) {
    this.id = item.id;

    for (const prop of item?.property ?? []) {
      this.propertyEdit[prop.property.id] = prop.string;
    }

    for (const prop of item?.value ?? []) {
      this.editValues.add(prop.id);
    }
  }

  toInput(): DirectoryInput {
    const addition: DirectoryInput = {
      id: this.id,
      property: [],
    } as DirectoryInput;

    for (const key in this.propertyEdit) {
      addition.property?.push({
        string: this.propertyEdit[key],
        property: key
      } as DirectoryPropertyInput);
    }

    addition.value = Array.from(this.editValues);

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
        this.dialogRef.close();
      });
    }
  }

  removeValue(value: string) {
    this.editValues.delete(value);
  }

  addValue(event: MatChipInputEvent) {
    const value = (event.value || '').trim();

    if (value) {
      this.editValues.add(value);
    }

    event.chipInput!.clear();
  }

}
