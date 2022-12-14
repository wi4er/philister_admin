import { Component, Inject, OnInit } from '@angular/core';
import {
  AddLangItemGQL, GetLangEditGQL,
  GetPropertyIdGQL, Lang, LangInput, LangPropertyInput, LangString,
  Property, UpdateLangItemGQL,
} from "../../../graph/types";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-lang-form',
  templateUrl: './lang-form.component.html',
  styleUrls: [ './lang-form.component.css' ]
})
export class LangFormComponent implements OnInit {

  id: string = '';
  created_at: string = '';
  updated_at: string = '';

  propertyList: Property[] = [];
  langList: Lang[] = [];
  editValues: { [property: string]: { [lang: string]: string } } = {};

  constructor(
    private addItemMutation: AddLangItemGQL,
    private updateItemMutation: UpdateLangItemGQL,
    private dialogRef: MatDialogRef<LangFormComponent>,
    private getPropertyListQuery: GetPropertyIdGQL,
    private getEditQuery: GetLangEditGQL,
    @Inject(MAT_DIALOG_DATA) public data: { id: string } | null,
  ) {
  }

  ngOnInit(): void {
    this.getEditQuery.fetch(
      { id: this.data?.id ?? '0' },
      { fetchPolicy: 'no-cache' }
    ).subscribe(res => {
      this.propertyList = res.data?.property?.list as Property[];
      this.langList = res.data?.lang?.list as Lang[];

      this.toValues(res.data.lang.item as unknown as Lang);
    });
  }

  getPropertyCount() {
    return Object.values(this.editValues)
      .flatMap(item => Object.values(item).filter(item => item))
      .length;
  }

  toValues(item: Lang | null) {
    if (item) {
      this.id = item.id;
      this.created_at = item.created_at;
      this.updated_at = item.updated_at;
    }

    for (const prop of this.propertyList) {
      this.editValues[prop.id] = {};

      for (const lang of this.langList) {
        this.editValues[prop.id][lang.id] = '';
      }
    }

    console.log(item)

    for (const prop of item?.propertyList ?? []) {
      // @ts-ignore
      if (prop['__typename'] === 'LangString') {
        const strProp: LangString = prop;

        if (!strProp?.lang?.id) {
          this.editValues[strProp.property.id][''] = prop.string;
        } else {
          this.editValues[strProp.property.id][strProp.lang.id] = prop.string;
        }
      }
    }
  }

  toInput(): LangInput {
    const addition: LangInput = {
      id: this.id,
      property: [],
    } as LangInput;

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
