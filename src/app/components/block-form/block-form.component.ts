import { Component, Inject, OnInit } from '@angular/core';
import {
  AddBlockItemGQL,
  AddUserItemGQL, BlockInput, BlockPropertyInput,
  Flag,
  GetPropertyIdGQL, GetUserAdditionGQL, GetUserUpdateGQL,
  Lang,
  Property, UpdateBlockItemGQL,
  UpdateUserGQL, User,
  UserContact,
  UserGroup, UserInput, UserString
} from "../../../graph/types";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-block-form',
  templateUrl: './block-form.component.html',
  styleUrls: ['./block-form.component.css']
})
export class BlockFormComponent implements OnInit {

  id: string = '';
  created_at: string = '';
  updated_at: string = '';

  propertyList: Property[] = [];
  langList: Lang[] = [];
  flagList: Flag[] = [];

  editProperties: { [property: string]: { [lang: string]: string } } = {};
  editFlags: { [field: string]: boolean } = {};

  constructor(
    private addItemMutation: AddBlockItemGQL,
    private updateItemMutation: UpdateBlockItemGQL,
    private dialogRef: MatDialogRef<BlockFormComponent>,
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

        this.initEditValues();
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

        this.initEditValues();
      });
    }
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

  toEdit(item: User) {
    this.id = String(item.id);
    this.created_at = item.created_at;
    this.updated_at = item.updated_at;

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

    for (const flag of item.flagString ?? []) {
      this.editFlags[flag] = true;
    }
  }

  toInput(): BlockInput {
    const input: BlockInput = {
      id: +this.id,
      property: [],
      flag: [],
    } as BlockInput;

    for (const prop in this.editProperties) {
      for (const lang in this.editProperties[prop]) {
        if (!this.editProperties[prop][lang]) {
          continue;
        }

        input.property?.push({
          string: this.editProperties[prop][lang],
          property: prop,
          lang: lang
        } as BlockPropertyInput);
      }
    }

    for (const flag in this.editFlags) {
      if (this.editFlags[flag]) {
        input.flag.push(flag);
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
