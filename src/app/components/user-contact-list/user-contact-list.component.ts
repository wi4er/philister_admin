import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import {
  DeleteUserContactListGQL,
  GetUserContactListGQL, UpdateUserContactFlagGQL,
  UserContact
} from "../../../graph/types";
import { UserContactFormComponent } from "../user-contact-form/user-contact-form.component";
import { CommonList } from "../../common/common-list/common-list";

@Component({
  selector: 'app-user-contact-list',
  templateUrl: './user-contact-list.component.html',
  styleUrls: [ './user-contact-list.component.css' ]
})
export class UserContactListComponent extends CommonList implements OnInit {

  columns: string[] = [];
  propertyList: string[] = [];
  flagList: string[] = [];

  @ViewChild(MatTable)
  table?: MatTable<any>;

  constructor(
    private dialog: MatDialog,
    private gerListQuery: GetUserContactListGQL,
    private deleteListMutation: DeleteUserContactListGQL,
    private updateFlagMutation: UpdateUserContactFlagGQL,
  ) {
    super();
  }

  formatData(data: UserContact[]) {
    const col = new Set<string>();
    const list = []

    for (const item of data) {
      const line: { [key: string]: string } = {
        'id': item.id,
        'type': item.type,
      };

      for (const prop of item?.propertyList ?? []) {
        col.add('property_' + prop.property.id);
        line['property_' + prop.property.id] = prop.string;
      }

      list.push(line);
    }

    this.propertyList = [ ...col ];
    this.columns = [ 'select', 'action', 'id', 'type', ...col ];
    this.list = list;
  }

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList() {
    this.gerListQuery.fetch({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    }, {
      fetchPolicy: 'network-only'
    })
      .subscribe(res => {
        this.formatData(res.data.userContact.list as unknown as UserContact[]);
        this.flagList = res.data.flag.list.map(it => it.id);
        this.totalCount = res.data.userContact.count;

        this.selection.clear();
        this.table?.renderRows();
      });
  }

  addItem() {
    const dialog = this.dialog.open(
      UserContactFormComponent,
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
      UserContactFormComponent,
      {
        width: '1000px',
        data: { id }
      },
    );

    dialog.afterClosed()
      .subscribe(() => this.fetchList());
  }

  updateFlag(id: string, flag: string) {
    this.updateFlagMutation.mutate({ id, flag })
      .subscribe(res => {
        console.log(res.data)
      });
  }

  deleteList() {
    this.deleteListMutation.mutate({
      id: this.selection.selected.map(item => item['id'])
    }).subscribe(() => this.fetchList());
  }

  deleteItem(id: string) {
    this.deleteListMutation.mutate({ id: id })
      .subscribe(() => this.fetchList());
  }

}
