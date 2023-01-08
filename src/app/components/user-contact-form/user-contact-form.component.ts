import { Component, Inject, OnInit } from '@angular/core';
import {
  AddUserContactItemGQL, Flag, GetUserContactAdditionGQL,
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
  flagList: Flag[] = [];

  editProperties: { [property: string]: { [lang: string]: string } } = {};
  editFlags: { [flag: string]: boolean } = {};

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
        this.propertyList = res.data.property.list as Property[];
        this.langList = res.data.lang.list as Lang[];
        this.flagList = res.data.flag.list as Flag[];

        this.toValues(res.data.userContact.item as unknown as UserContact);
      });
    } else {
      this.getAdditionQuery.fetch(
        {},
        { fetchPolicy: 'no-cache' }
      ).subscribe(res => {
        this.propertyList = res.data.property.list as Property[];
        this.langList = res.data.lang.list as Lang[];
        this.flagList = res.data.flag.list as Flag[];

        this.initEditValues();
      });
    }
  }

  getTypeList() {
    return Object.values(UserContactType);
  }

  getPropertyCount() {
    return Object.values(this.editProperties)
      .flatMap(item => Object.values(item).filter(item => item))
      .length;
  }

  initEditValues() {
    for (const prop of this.propertyList) {
      this.editProperties[prop.id] = {};

      for (const lang of this.langList) {
        this.editProperties[prop.id][lang.id] = '';
      }
    }

    for (const flag of this.flagList) {
      this.editFlags[flag.id] = false;
    }
  }

  toValues(item: UserContact | null) {
    if (item) {
      this.id = item.id;
      this.created_at = item.created_at;
      this.updated_at = item.updated_at;
      this.type.setValue(item.type);
    }

    this.initEditValues();

    for (const prop of item?.propertyList ?? []) {
      // @ts-ignore
      if (prop['__typename'] === 'UserContactString') {
        const strProp: LangString = prop;

        if (!strProp?.lang?.id) {
          this.editProperties[strProp.property.id][''] = prop.string;
        } else {
          this.editProperties[strProp.property.id][strProp.lang.id] = prop.string;
        }
      }
    }

    for (const flag of item?.flagString ?? []) {
      this.editFlags[flag] = true;
    }
  }

  toInput(): UserContactInput {
    const input: UserContactInput = {
      id: this.id,
      type: this.type.value,
      property: [],
      flag: [],
    } as UserContactInput;

    for (const prop in this.editProperties) {
      for (const lang in this.editProperties[prop]) {
        if (!this.editProperties[prop][lang]) {
          continue;
        }

        input.property?.push({
          string: this.editProperties[prop][lang],
          property: prop,
          lang: lang
        } as LangPropertyInput);
      }
    }

    for (const flag in this.editFlags) {
      if (this.editFlags[flag]) {
        input.flag.push(flag)
      }
    }

    return input;
  }

  saveItem() {
    if (this.data?.id) {
      this.updateItemMutation.mutate({ item: this.toInput() })
        .subscribe(() => this.dialogRef.close());
    } else {
      this.addItemMutation.mutate({ item: this.toInput() })
        .subscribe(() => this.dialogRef.close());
    }
  }

}
