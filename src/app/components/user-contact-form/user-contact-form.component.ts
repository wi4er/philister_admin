import { Component, Inject, OnInit } from '@angular/core';
import {
  AddUserContactItemGQL, GetUserContactAdditionGQL,
  GetUserContactUpdateGQL,
  Lang,
  LangPropertyInput,
  LangString,
  Property,
  UpdateUserContactItemGQL, UserContact,
  UserContactInput,
  UserContactType
} from "../../../graph/types";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-user-contact-form',
  templateUrl: './user-contact-form.component.html',
  styleUrls: [ './user-contact-form.component.css' ]
})
export class UserContactFormComponent implements OnInit {

  id: string = '';
  type = new FormControl(UserContactType.Email);
  created_at: string = '';
  updated_at: string = '';

  propertyList: Property[] = [];
  langList: Lang[] = [];
  editValues: { [property: string]: { [lang: string]: string } } = {};

  constructor(
    private addItemMutation: AddUserContactItemGQL,
    private updateItemMutation: UpdateUserContactItemGQL,
    private dialogRef: MatDialogRef<UserContactFormComponent>,
    private getUpdateQuery: GetUserContactUpdateGQL,
    private getAdditionQuery: GetUserContactAdditionGQL,
    @Inject(MAT_DIALOG_DATA) public data: { id: string } | null,
  ) {
  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.getUpdateQuery.fetch(
        { id: this.data.id },
        { fetchPolicy: 'no-cache' }
      ).subscribe(res => {
        this.propertyList = res.data?.property?.list as Property[];
        this.langList = res.data?.lang?.list as Lang[];

        this.toValues(res.data.userContact.item as unknown as UserContact);
      });
    } else {
      this.getAdditionQuery.fetch(
        {},
        { fetchPolicy: 'no-cache' }
      ).subscribe(res => {
        this.propertyList = res.data?.property?.list as Property[];
        this.langList = res.data?.lang?.list as Lang[];

        this.initEditValues();
      });

    }
  }

  getTypeList() {
    return Object.values(UserContactType) ;
  }

  getPropertyCount() {
    return Object.values(this.editValues)
      .flatMap(item => Object.values(item).filter(item => item))
      .length;
  }

  initEditValues() {
    for (const prop of this.propertyList) {
      this.editValues[prop.id] = {};

      for (const lang of this.langList) {
        this.editValues[prop.id][lang.id] = '';
      }
    }
  }

  toValues(item: UserContact | null) {
    if (item) {
      this.id = item.id;
      this.created_at = item.created_at;
      this.updated_at = item.updated_at;
      this.type.setValue(item.type);
    }

    console.log(item)

    this.initEditValues();

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

  toInput(): UserContactInput {
    const input: UserContactInput = {
      id: this.id,
      type: this.type.value,
      property: [],
      flag: [],
    } as UserContactInput;

    for (const prop in this.editValues) {
      for (const lang in this.editValues[prop]) {
        if (!this.editValues[prop][lang]) {
          continue;
        }

        input.property?.push({
          string: this.editValues[prop][lang],
          property: prop,
          lang: lang
        } as LangPropertyInput);
      }
    }

    return input;
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
