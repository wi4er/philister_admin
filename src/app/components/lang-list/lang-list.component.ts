import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from "@angular/cdk/collections";
import { PageEvent } from "@angular/material/paginator";
import { MatTable } from "@angular/material/table";
import { PropertyService } from "../../services/property.service";
import { MatDialog } from "@angular/material/dialog";
import {
  DeleteLangListGQL,
  DeletePropertyListGQL,
  GetLangListGQL,
  GetPropertyListGQL,
  Lang,
  LangString
} from "../../../graph/types";
import { LangFormComponent } from "../lang-form/lang-form.component";

@Component({
  selector: 'app-lang-list',
  templateUrl: './lang-list.component.html',
  styleUrls: [ './lang-list.component.css' ]
})
export class LangListComponent implements OnInit {

  list: { [key: string]: string }[] = [];
  columns: string[] = [];
  properties: string[] = [];
  selection = new SelectionModel<{ [key: string]: string }>(true, []);

  pageEvent?: PageEvent;
  totalCount: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;

  @ViewChild(MatTable)
  table?: MatTable<any>;

  constructor(
    private propertyService: PropertyService,
    private dialog: MatDialog,
    private getPropertyListQuery: GetPropertyListGQL,
    private getLangListQuery: GetLangListGQL,
    private deleteListMutation: DeleteLangListGQL,
  ) {
  }

  formatData(data: Lang[]) {
    const col = new Set<string>();
    const list = []

    console.log(data)
    for (const item of data) {
      const line: { [key: string]: string } = { 'id': item.id };

      for (const prop of item?.propertyList ?? []) {
        const strProp = prop as LangString;

        col.add(`property_${strProp.lang.id}_${strProp.property.id}`);
        line['property_' + strProp.property.id] = strProp.string;
      }

      list.push(line);
    }

    this.properties = [ ...col ];
    this.columns = [ 'select', 'action', 'id', ...col ];
    this.list = list;
  }

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList() {
    this.getLangListQuery.fetch({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    }, {
      fetchPolicy: 'network-only'
    })
      .subscribe(res => {
        this.formatData(res.data.lang.list as unknown as Lang[]);
        this.totalCount = res.data.lang.count;

        this.selection.clear();
        this.table?.renderRows();
      });
  }

  addItem() {
    const dialog = this.dialog.open(
      LangFormComponent,
      {
        width: '1000px',
        panelClass: 'wrapper'
      }
    );

    dialog.afterClosed()
      .subscribe(() => this.fetchList());
  }

  updateProperty(id: number) {
    const dialog = this.dialog.open(
      LangFormComponent,
      {
        width: '1000px',
        data: { id }
      },
    );

    dialog.afterClosed()
      .subscribe(() => this.fetchList());
  }

  deleteList() {
    this.deleteListMutation.mutate({
      id: this.selection.selected.map(item => item['id'])
    }).subscribe(() => this.fetchList());
  }

  deleteItem(id: string) {
    this.deleteListMutation.mutate({
      id: id
    }).subscribe(() => this.fetchList());
  }

  isAllSelected() {
    return this.selection.selected.length === this.list.length;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.list);
    }
  }

  changePage(event: PageEvent) {
    this.pageEvent = event;
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;

    this.fetchList();
  }

}
