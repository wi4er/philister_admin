import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {
  Block,
  DeleteBlockListGQL,
  GetBlockListGQL,
  GetPropertyListGQL, ToggleBlockFlagGQL,
} from '../../../graph/types';
import { CommonList } from '../../common/common-list/common-list';
import { BlockFormComponent } from '../block-form/block-form.component';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: [ './block-list.component.css' ],
})
export class BlockListComponent extends CommonList implements OnInit {

  list: { [key: string]: string }[] = [];
  columns: string[] = [];
  propertyList: string[] = [];
  flagList: string[] = [];
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
    private getListQuery: GetBlockListGQL,
    private deleteListMutation: DeleteBlockListGQL,
    private toggleFlagMutation: ToggleBlockFlagGQL,
  ) {
    super();
  }

  formatData(data: Block[]) {
    const col = new Set<string>();
    const list = [];

    for (const item of data) {
      const line: { [key: string]: string } = { 'id': String(item.id) };

      for (const prop of item.propertyList ?? []) {
        col.add('property_' + prop.property.id);
        line['property_' + prop.property.id] = prop.string;
      }

      for (const fl of item.flagString) {
        col.add('flag_' + fl)
        line['flag_' + fl] = fl;
      }

      // @ts-ignore
      line['flags'] = item.flagString;

      list.push(line);
    }

    this.propertyList = [ ...col ];
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
      fetchPolicy: 'network-only',
    })
      .subscribe(res => {
        this.formatData(res.data.block.list as unknown as Block[]);
        this.flagList = res.data.flag.list.map(it => it.id);
        this.totalCount = res.data.block.count;

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
      BlockFormComponent,
      {
        width: '1000px',
        data: { id },
      },
    );

    dialog.afterClosed()
      .subscribe(() => this.fetchList());
  }

  toggleFlag(id: number, flag: string) {
    this.toggleFlagMutation.mutate({ id, flag })
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
