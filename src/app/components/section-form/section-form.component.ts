import { Component, Inject, OnInit } from '@angular/core';
import {
  AddElementItemGQL, AddSectionItemGQL, BlockPropertyInput, BlockString, Element, ElementInput,
  Flag,
  GetElementAdditionGQL, GetElementUpdateGQL,
  GetPropertyIdGQL, GetSectionAdditionGQL, GetSectionUpdateGQL,
  Lang,
  Property, Section, SectionInput,
  UpdateElementItemGQL, UpdateSectionItemGQL,
} from '../../../graph/types';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: [ './section-form.component.css' ],
})
export class SectionFormComponent implements OnInit {

  id: string = '';
  created_at: string = '';
  updated_at: string = '';

  propertyList: Property[] = [];
  langList: Lang[] = [];
  flagList: Flag[] = [];

  editProperties: { [property: string]: { [lang: string]: string } } = {};
  editFlags: { [field: string]: boolean } = {};

  constructor(
    private addItemMutation: AddSectionItemGQL,
    private updateItemMutation: UpdateSectionItemGQL,
    private dialogRef: MatDialogRef<SectionFormComponent>,
    private getListQuery: GetPropertyIdGQL,
    private getAdditionQuery: GetSectionAdditionGQL,
    private getUpdateQuery: GetSectionUpdateGQL,
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

        this.initEditValues();
        this.toEdit(res.data.section.item as unknown as Section);
      });
    } else {
      this.getAdditionQuery.fetch(
        {},
        { fetchPolicy: 'no-cache' },
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

  toEdit(item: Section) {
    this.id = String(item.id);
    this.created_at = item.created_at;
    this.updated_at = item.updated_at;

    for (const prop of item?.propertyList ?? []) {
      // @ts-ignore
      if (prop['__typename'] === 'SectionString') {
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

  toInput(): SectionInput {
    const input: SectionInput = {
      id: +this.id,
      block: this.data?.block,
      property: [],
      flag: [],
    } as SectionInput;

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
