import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from "@angular/cdk/collections";
import { PageEvent } from "@angular/material/paginator";
import { MatTable } from "@angular/material/table";
import { PropertyService } from "../../services/property.service";
import { MatDialog } from "@angular/material/dialog";
import { FetchLog, GetFetchListGQL } from "../../../graph/types";

@Component({
  selector: 'app-fetch-log-list',
  templateUrl: './fetch-log-list.component.html',
  styleUrls: ['./fetch-log-list.component.css']
})
export class FetchLogListComponent implements OnInit {

  list: { [key: string]: string }[] = [];
  columns: string[] = [];
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
    private getListQuery: GetFetchListGQL,
  ) {
  }

  formatData(data: FetchLog[]) {
    const list = []

    for (const item of data) {
      const line: { [key: string]: string } = {
        'id': String(item.id),
        'entity': item.entity,
        'entityId': item.entityId,
        'arguments': item.arguments,
        'operation': item.operation,
        'user': String(item.user.id),
      };

      list.push(line);
    }

    this.columns = [ 'id', 'entity', 'arguments', 'operation' ];
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
        this.formatData(res.data.fetchLog.list as FetchLog[]);
        this.totalCount = res.data.fetchLog.count;

        this.selection.clear();
        this.table?.renderRows();
      });
  }

  changePage(event: PageEvent) {
    this.pageEvent = event;
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;

    this.fetchList();
  }

}
