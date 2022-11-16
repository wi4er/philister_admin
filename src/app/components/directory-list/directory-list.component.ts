import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from "@angular/cdk/collections";
import { PageEvent } from "@angular/material/paginator";
import { MatTable } from "@angular/material/table";
import { PropertyService } from "../../services/property.service";
import { MatDialog } from "@angular/material/dialog";
import {
  DeleteDirectoryGQL, Directory,
  GetDirectoryListGQL, GetPropertyListGQL,
} from "../../../graph/types";
import { PropertyFormComponent } from "../property-form/property-form.component";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { DirectoryFormComponent } from "../directory-form/directory-form.component";

@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: [ './directory-list.component.css' ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class DirectoryListComponent implements OnInit {

  list: { [key: string]: string }[] = [];
  properties: string[] = [];
  values: string[] = [];
  selection = new SelectionModel<{ [key: string]: string }>(true, []);
  expandedElement: Directory | null = null;

  pageEvent?: PageEvent;
  totalCount: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;

  @ViewChild(MatTable)
  table?: MatTable<any>;

  constructor(
    private propertyService: PropertyService,
    private dialog: MatDialog,
    private getDirectoryListQuery: GetDirectoryListGQL,
    private getPropertyListQuery: GetPropertyListGQL,
    private deleteDirectoryQuery: DeleteDirectoryGQL,
  ) {
  }

  ngOnInit(): void {
    this.fetchList();
  }

  formatData(data: Directory[]) {
    const propSet = new Set<string>();
    const list = []

    for (const item of data) {
      const line: { [key: string]: any } = { 'id': item.id };

      for (const prop of item?.property ?? []) {
        propSet.add('property_' + prop.property.id);
        line['property_' + prop.property.id] = prop.value;
      }

      line['values'] = item.value;

      list.push(line);
    }

    this.properties = [ ...propSet ];
    this.list = list;
  }

  getColumns() {
    return [ 'select', 'action', 'id', ...this.properties, 'value' ];
  }

  fetchList() {
    this.getDirectoryListQuery.fetch({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    }, {
      fetchPolicy: 'network-only'
    })
      .subscribe(res => {
        this.formatData(res.data.directory.list as Directory[]);
        this.totalCount = res.data.directory.count;

        this.selection.clear();
        this.table?.renderRows();
      });
  }

  addPropertyItem() {
    const dialog = this.dialog.open(
      DirectoryFormComponent,
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
      DirectoryFormComponent,
      { data: { id } },
    );

    dialog.afterClosed()
      .subscribe(() => this.fetchList());
  }

  deletePropertyList() {
    this.deleteDirectoryQuery.mutate({
      id: this.selection.selected.map(item => item['id'])
    }).subscribe(() => this.fetchList());
  }

  deletePropertyItem(id: string) {
    this.deleteDirectoryQuery.mutate({
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
