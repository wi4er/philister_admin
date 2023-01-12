import { Component, Inject, OnInit } from '@angular/core';
import {
  AddUserItemGQL, Flag,
  GetPropertyIdGQL, GetUserAdditionGQL, GetUserUpdateGQL, Lang, LangPropertyInput,
  Property, UpdateUserGQL, User, UserContact, UserInput, UserString,
} from "../../../graph/types";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [ './user-form.component.css' ]
})
export class UserFormComponent implements OnInit {

  id: string = '';

  login: string = '';
  created_at: string = '';
  updated_at: string = '';

  propertyList: Property[] = [];
  langList: Lang[] = [];
  flagList: Flag[] = [];
  contactList: UserContact[] = [];

  editProperties: { [property: string]: { [lang: string]: string } } = {};
  editFlags: { [field: string]: boolean } = {};
  editContacts: { [field: string]: string } = {};

  constructor(
    private addItemMutation: AddUserItemGQL,
    private updateItemMutation: UpdateUserGQL,
    private dialogRef: MatDialogRef<UserFormComponent>,
    private getListQuery: GetPropertyIdGQL,
    private getAdditionQuery: GetUserAdditionGQL,
    private getUpdateQuery: GetUserUpdateGQL,
    @Inject(MAT_DIALOG_DATA) public data: { id: string } | null,
  ) {
  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.getUpdateQuery.fetch(
        { id: +this.data.id },
        { fetchPolicy: 'no-cache' }
      ).subscribe(res => {
        this.propertyList = res.data.property.list as Property[];
        this.langList = res.data.lang.list as Lang[];
        this.flagList = res.data.flag.list as Flag[];
        this.contactList = res.data.userContact.list as UserContact[];

        this.toEdit(res.data.user.item as unknown as User);
      });
    } else {
      this.getAdditionQuery.fetch(
        {},
        { fetchPolicy: 'no-cache' }
      ).subscribe(res => {
        this.propertyList = res.data.property.list as Property[];
        this.langList = res.data.lang.list as Lang[];
        this.flagList = res.data.flag.list as Flag[];
        this.contactList = res.data.userContact.list as UserContact[];

        this.initEditValues();
      });
    }
  }

  getPropertyCount() {
    return 10;
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

    for (const contact of this.contactList) {
      this.editContacts[contact.id] = '';
    }
  }

  toEdit(item: User) {
    this.id = String(item.id);
    this.login = item.login;
    this.created_at = item.created_at;
    this.updated_at = item.updated_at;

    this.initEditValues();

    for (const prop of item?.propertyList ?? []) {
      // @ts-ignore
      if (prop['__typename'] === 'UserString') {
        const strProp = prop as UserString;

        if (!strProp?.lang?.id) {
          this.editProperties[strProp.property.id][''] = prop.string;
        } else {
          this.editProperties[strProp.property.id][strProp.lang.id] = prop.string;
        }
      }
    }

    console.log(item.flagString)

    for (const flag of item.flagString ?? []) {
      this.editFlags[flag] = true;
    }

    for (const contact of item.contact) {
      this.editContacts[contact.contact.id] = contact.value;
    }
  }

  toInput(): UserInput {
    const input: UserInput = {
      id: +this.id,
      login: this.login,
      property: [],
      contact: [],
      flag: [],
    } as UserInput;

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
        input.flag.push(flag);
      }
    }

    for(const contact in this.editContacts) {
      if (this.editContacts[contact]) {
        input.contact.push({
          contact,
          value: this.editContacts[contact],
        });
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
