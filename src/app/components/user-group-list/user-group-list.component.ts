import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeleteUserListGQL, GetUserGroupListGQL, GetUserListGQL, User } from "../../../graph/types";
import { MatTable } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { CommonList } from "../../common/common-list/common-list";
import { UserGroupFormComponent } from "../user-group-form/user-group-form.component";

@Component({
  selector: 'app-user-group-list',
  templateUrl: './user-group-list.component.html',
  styleUrls: [ './user-group-list.component.css' ]
})
export class UserGroupListComponent extends CommonList implements OnInit {

  list: { [key: string]: string }[] = [];
  properties: string[] = [];

  @ViewChild(MatTable)
  table?: MatTable<any>;

  constructor(
    private dialog: MatDialog,
    private getListQuery: GetUserGroupListGQL,
    private deleteListQuery: DeleteUserListGQL,
  ) {
    super();
  }

  getColumns() {
    return [ 'select', 'action', 'id', ...this.properties ];
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
        this.formatData(res.data.userGroup.list as User[]);
        this.totalCount = res.data.userGroup.count;

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
      UserGroupFormComponent,
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
      UserGroupFormComponent,
      { data: { id } },
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
    this.deleteListQuery.mutate({
      id: +id
    }).subscribe(() => this.fetchList());
  }

}
