import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeleteUserListGQL, GetUserListGQL, User } from "../../../graph/types";
import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from "@angular/material/paginator";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTable } from "@angular/material/table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { UserFormComponent } from "../user-form/user-form.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.css' ],
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
export class UserListComponent implements OnInit {

  list: { [key: string]: string }[] = [];
  properties: string[] = [];
  selection = new SelectionModel<{ [key: string]: string }>(true, []);
  expandedElement: User | null = null;

  pageEvent?: PageEvent;
  totalCount: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;

  @ViewChild(MatTable)
  table?: MatTable<any>;

  constructor(
    private dialog: MatDialog,
    private getListQuery: GetUserListGQL,
    private deleteListQuery: DeleteUserListGQL,
  ) {
  }

  getColumns() {
    return [ 'select', 'action', 'id', 'login', ...this.properties ];
  }

  formatData(data: User[]) {
    const propSet = new Set<string>();
    const list = []

    for (const item of data) {
      const line: { [key: string]: any } = {
        'id': item.id,
        'login': item.login,
      };

      for (const prop of item?.propertyList ?? []) {
        propSet.add('property_' + prop.property.id);
        line['property_' + prop.property.id] = prop.string;
      }

      list.push(line);
    }

    this.properties = [ ...propSet ];
    this.list = list;
  }

  fetchList() {
    this.getListQuery.fetch({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    }, {
      fetchPolicy: 'network-only'
    })
      .subscribe(res => {
        this.formatData(res.data.user.list as User[]);
        this.totalCount = res.data.user.count;

        this.selection.clear();
        this.table?.renderRows();
      });
  }

  @Input()
  limit: number = 0;

  ngOnInit(): void {
    this.fetchList();
  }

  addItem() {
    const dialog = this.dialog.open(
      UserFormComponent,
      {
        width: '1000px',
        panelClass: 'wrapper'
      }
    );

    dialog.afterClosed()
      .subscribe(() => this.fetchList());
  }

  updateItem(id: number) {
    const dialog = this.dialog.open(
      UserFormComponent,
      {
        width: '1000px',
        data: { id },
      },
    );

    dialog.afterClosed()
      .subscribe(() => this.fetchList());
  }

  deleteList() {
    this.deleteListQuery.mutate({
      id: this.selection.selected.map(item => +item['id'])
    }).subscribe(() => this.fetchList());
  }

  deleteItem(id: string) {
    this.deleteListQuery.mutate({ id: +id })
      .subscribe(() => this.fetchList());
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
