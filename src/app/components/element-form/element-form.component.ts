import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  AddElementItemGQL, Block, BlockPropertyInput, BlockString, Element, ElementInput,
  Flag,
  GetElementAdditionGQL, GetElementUpdateGQL,
  GetPropertyIdGQL,
  Lang,
  Property,
  UpdateElementItemGQL,
} from '../../../graph/types';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-element-form',
  templateUrl: './element-form.component.html',
  styleUrls: [ './element-form.component.css' ],
})
export class ElementFormComponent implements OnInit {

  id: string = '';
  created_at: string = '';
  updated_at: string = '';

  propertyList: Property[] = [];
  langList: Lang[] = [];
  flagList: Flag[] = [];
  blockList: Block[] = [];

  editProperties: { [property: string]: { [lang: string]: string } } = {};
  editFlags: { [field: string]: boolean } = {};

  constructor(
    private addItemMutation: AddElementItemGQL,
    private updateItemMutation: UpdateElementItemGQL,
    private dialogRef: MatDialogRef<ElementFormComponent>,
    private getListQuery: GetPropertyIdGQL,
    private getAdditionQuery: GetElementAdditionGQL,
    private getUpdateQuery: GetElementUpdateGQL,
    @Inject(MAT_DIALOG_DATA) public data: { id: string, block: number } | null,
  ) {
  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.getUpdateQuery.fetch(
        { id: +this.data.id },
        { fetchPolicy: 'no-cache' },
      ).subscribe(res => {
        this.propertyList = res.data.property.list as Property[];
        this.langList = res.data.lang.list as Lang[];
        this.flagList = res.data.flag.list as Flag[];
        this.blockList = res.data.block.list as Block[];

        this.initEditValues();
        this.toEdit(res.data.element.item as unknown as Element);
      });
    } else {
      this.getAdditionQuery.fetch(
        {},
        { fetchPolicy: 'no-cache' },
      ).subscribe(res => {
        this.propertyList = res.data.property.list as Property[];
        this.langList = res.data.lang.list as Lang[];
        this.flagList = res.data.flag.list as Flag[];
        this.blockList = res.data.block.list as Block[];

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

  toEdit(item: Element) {
    this.id = String(item.id);
    this.created_at = item.created_at;
    this.updated_at = item.updated_at;

    for (const prop of item?.propertyList ?? []) {
      // @ts-ignore
      if (prop['__typename'] === 'ElementString') {
        const strProp = prop as BlockString;

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

  toInput(): ElementInput {
    const input: ElementInput = {
      id: +this.id,
      block: this.data?.block,
      property: [],
      flag: [],
    } as ElementInput;

    for (const prop in this.editProperties) {
      for (const lang in this.editProperties[prop]) {
        if (!this.editProperties[prop][lang]) {
          continue;
        }

        input.property?.push({
          string: this.editProperties[prop][lang],
          property: prop,
          lang: lang,
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
