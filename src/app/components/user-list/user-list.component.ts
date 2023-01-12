import { Component, OnInit, ViewChild } from '@angular/core';
import { DeleteUserListGQL, Flag, GetUserListGQL, UpdateUserFlagGQL, User } from "../../../graph/types";
import { MatDialog } from "@angular/material/dialog";
import { MatTable } from "@angular/material/table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { UserFormComponent } from "../user-form/user-form.component";
import { CommonList } from "../../common/common-list/common-list";

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
export class UserListComponent extends CommonList implements OnInit {

  properties: string[] = [];

  expandedElement: User | null = null;

  flagList: string[] = [];

  @ViewChild(MatTable)
  table?: MatTable<any>;

  constructor(
    private dialog: MatDialog,
    private getListQuery: GetUserListGQL,
    private deleteListQuery: DeleteUserListGQL,

    private updateFlagMutation: UpdateUserFlagGQL
  ) {
    super();
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
        this.flagList = res.data.flag.list.map(it => it.id);

        this.selection.clear();
        this.table?.renderRows();
      });
  }

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

  updateFlag(id: number, flag: string) {
    this.updateFlagMutation.mutate({ id, flag })
      .subscribe(res => {
        console.log(res.data)
      });
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

}
