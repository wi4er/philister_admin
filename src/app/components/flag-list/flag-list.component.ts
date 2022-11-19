import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from "@angular/cdk/collections";
import { PageEvent } from "@angular/material/paginator";
import { MatTable } from "@angular/material/table";
import { PropertyService } from "../../services/property.service";
import { MatDialog } from "@angular/material/dialog";
import {
  DeleteFlagListGQL,
  Flag,
  GetFlagListGQL,
  GetFlagListQuery,
  GetPropertyListGQL,
  Property
} from "../../../graph/types";
import { PropertyFormComponent } from "../property-form/property-form.component";

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.css']
})
export class FlagListComponent implements OnInit {

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
    // private propertyService: PropertyService,
    private dialog: MatDialog,
    private getListQuery: GetFlagListGQL,
    private deleteListMutation: DeleteFlagListGQL,
  ) {
  }

  formatData(data: Flag[]) {
    const col = new Set<string>();
    const list = []

    for (const item of data) {
      const line: { [key: string]: string } = { 'id': item.id };

      for (const prop of item?.property ?? []) {
        col.add('property_' + prop.property.id);
        line['property_' + prop.property.id] = prop.string;
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
    this.getListQuery.fetch({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    }, {
      fetchPolicy: 'network-only'
    })
      .subscribe(res => {
        this.formatData(res.data.flag.list as Flag[]);
        this.totalCount = res.data.flag.count;

        this.selection.clear();
        this.table?.renderRows();
      });
  }

  addPropertyItem() {
    const dialog = this.dialog.open(
      PropertyFormComponent,
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
      PropertyFormComponent,
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
