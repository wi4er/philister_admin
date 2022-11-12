import { Component, OnInit, ViewChild } from '@angular/core';
import { PropertyService } from "../../services/property.service";
import { DeletePropertyItemGQL, GetPropertyListGQL, Property } from "../../../graph/types";
import { MatDialog } from "@angular/material/dialog";
import { PropertyFormComponent } from "../property-form/property-form.component";
import { SelectionModel } from "@angular/cdk/collections";
import { PageEvent } from "@angular/material/paginator";
import { MatTable } from "@angular/material/table";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: [ './property-list.component.css' ]
})
export class PropertyListComponent implements OnInit {

  list: { [key: string]: string }[] = [];
  columns: string[] = [];
  properties: string[] = [];
  selection = new SelectionModel<{ [key: string]: string }>(true, []);

  pageEvent?: PageEvent;
  totalCount: number = 0;
  pageSize: number = 5;
  currentPage: number = 0;

  @ViewChild(MatTable)
  table?: MatTable<any>;

  constructor(
    private propertyService: PropertyService,
    public dialog: MatDialog,
    private getPropertyListQuery: GetPropertyListGQL,
    private deletePropertyQuery: DeletePropertyItemGQL,
  ) {
  }

  formatData(data: Property[]) {
    const col = new Set<string>();
    const list = []

    for (const item of data) {
      const line: { [key: string]: string } = { 'id': item.id };

      for (const prop of item?.property ?? []) {
        col.add('property_' + prop.property.id);
        line['property_' + prop.property.id] = prop.value;
      }

      list.push(line);
    }

    this.properties = [ ...col ];
    this.columns = [ 'select', 'action', 'id', ...col ];
    this.list = list;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.getPropertyListQuery.fetch({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    }, {
      fetchPolicy: 'network-only'
    })
      .subscribe(res => {
        this.formatData(res.data.property.list as Property[]);
        this.totalCount = res.data.property.count;

        this.selection.clear();
        this.table?.renderRows();
      })
  }

  addProperty() {
    const dialog = this.dialog.open(PropertyFormComponent, {
      width: '1000px'
    });

    dialog.afterClosed()
      .subscribe(() => this.fetchData());
  }

  deleteProperty() {
    this.deletePropertyQuery.mutate({
      id: this.selection.selected.map(item => item['id'])
    }).subscribe(res => this.fetchData());
  }

  deletePropertyItem(id: string) {
    this.deletePropertyQuery.mutate({id: id})
      .subscribe(res => this.fetchData());
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.list.length;
    return numSelected === numRows;
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
    this.selection.clear();

    this.fetchData();
  }
}
