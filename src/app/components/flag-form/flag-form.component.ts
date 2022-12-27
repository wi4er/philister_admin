import { Component, Inject, OnInit } from '@angular/core';
import {
  AddFlagGQL,
  Flag, FlagInput, FlagString, GetFlagAdditionGQL, GetFlagUpdateGQL,
  GetPropertyIdGQL,
  Lang, LangPropertyInput,
  Property, UpdateFlagGQL,
} from "../../../graph/types";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-flag-form',
  templateUrl: './flag-form.component.html',
  styleUrls: [ './flag-form.component.css' ]
})
export class FlagFormComponent implements OnInit {

  id: string = '';
  created_at: string = '';
  updated_at: string = '';

  propertyList: Property[] = [];
  flagList: Flag[] = [];
  langList: Lang[] = [];
  editValues: { [property: string]: { [lang: string]: string } } = {};

  constructor(
    private addItemMutation: AddFlagGQL,
    private updateItemMutation: UpdateFlagGQL,
    private dialogRef: MatDialogRef<FlagFormComponent>,
    private getPropertyListQuery: GetPropertyIdGQL,
    private getAdditionQuery: GetFlagAdditionGQL,
    private getUpdateQuery: GetFlagUpdateGQL,
    @Inject(MAT_DIALOG_DATA) public data: { id: string } | null,
  ) {
  }

  ngOnInit(): void {

    if (this.data?.id) {
      this.getUpdateQuery.fetch(
        { id: this.data?.id },
        { fetchPolicy: 'no-cache' }
      ).subscribe(res => {
        this.propertyList = res.data?.property?.list as Property[];
        this.langList = res.data?.lang?.list as Lang[];

        this.toValues(res.data.flag.item as unknown as Flag);
      });
    } else {
      this.getAdditionQuery.fetch(
        {},
        { fetchPolicy: 'no-cache' }
      ).subscribe(res => {
        this.propertyList = res.data.property.list as Property[];
        this.langList = res.data?.lang?.list as Lang[];

        this.initEditValues();
      });
    }
  }

  initEditValues() {
    for (const prop of this.propertyList) {
      this.editValues[prop.id] = {};

      for (const lang of this.langList) {
        this.editValues[prop.id][lang.id] = '';
      }
    }
  }

  getPropertyCount() {
    return Object.values(this.editValues)
      .flatMap(item => Object.values(item).filter(item => item))
      .length;
  }

  toValues(item: Flag | null) {
    if (item) {
      this.id = item.id;
      this.created_at = item.created_at;
      this.updated_at = item.updated_at;
    }

    this.initEditValues();

    for (const prop of item?.propertyList ?? []) {
      // @ts-ignore
      if (prop['__typename'] === 'FlagString') {
        const strProp: FlagString = prop;

        if (!strProp?.lang?.id) {
          this.editValues[strProp.property.id][''] = prop.string;
        } else {
          this.editValues[strProp.property.id][strProp.lang.id] = prop.string;
        }
      }
    }
  }

  toInput(): FlagInput {
    const addition: FlagInput = {
      id: this.id,
      property: [],
      flag: [],
    } as FlagInput;

    for (const prop in this.editValues) {
      for (const lang in this.editValues[prop]) {
        if (!this.editValues[prop][lang]) {
          continue;
        }

        addition.property?.push({
          string: this.editValues[prop][lang],
          property: prop,
          lang: lang
        } as LangPropertyInput);
      }
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
