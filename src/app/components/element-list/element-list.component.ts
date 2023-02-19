import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {
  DeleteElementListGQL, Element,
  GetElementListGQL,
  GetPropertyListGQL,
} from '../../../graph/types';
import { BlockFormComponent } from '../block-form/block-form.component';
import { ElementFormComponent } from '../element-form/element-form.component';
import { CommonList } from '../../common/common-list/common-list';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: [ './element-list.component.css' ],
})
export class ElementListComponent extends CommonList implements OnInit {

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
    private dialog: MatDialog,
    private getPropertyListQuery: GetPropertyListGQL,
    private getListQuery: GetElementListGQL,
    private deleteListMutation: DeleteElementListGQL,
  ) {
    super();
  }

  @Input()
  blockId: number = 0;

  formatData(data: Element[]) {
    const col = new Set<string>();
    const list = [];

    for (const item of data) {
      const line: { [key: string]: string } = { 'id': String(item.id) };

      for (const prop of item?.propertyList ?? []) {
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
      filter: [{
        field: 'block',
        value: this.blockId.toString(),
      }]
    }, {
      fetchPolicy: 'network-only',
    })
      .subscribe(res => {
        this.formatData(res.data.element.list as unknown as Element[]);
        this.totalCount = res.data.element.count;

        this.selection.clear();
        this.table?.renderRows();
      });
  }

  addItem() {
    const dialog = this.dialog.open(
      BlockFormComponent,
      {
        width: '1000px',
        panelClass: 'wrapper',
      },
    );

    dialog.afterClosed()
      .subscribe(() => this.fetchList());
  }

  updateItem(id: number) {
    const dialog = this.dialog.open(
      ElementFormComponent,
      {
        width: '1000px',
        data: { id },
      },
    );

    dialog.afterClosed()
      .subscribe(() => this.fetchList());
  }

  deleteList() {
    this.deleteListMutation.mutate({
      id: this.selection.selected.map(item => +item['id']),
    }).subscribe(() => this.fetchList());
  }

  deleteItem(id: string) {
    this.deleteListMutation.mutate({
      id: [ +id ],
    }).subscribe(() => this.fetchList());
  }

}
