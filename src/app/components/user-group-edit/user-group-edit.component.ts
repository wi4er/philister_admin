import { Component, Input, OnInit } from '@angular/core';
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { GroupTreeNode } from "./group-tree-node";
import { UserGroup } from "../../../graph/types";

const TREE_DATA: GroupTreeNode[] = [
  {
    id: 1,
    name: 'root',
  }, {
    id: 2,
    name: 'line 1',
  }, {
    id: 3,
    name: 'line 2',
  }
];

@Component({
  selector: 'app-user-group-edit',
  templateUrl: './user-group-edit.component.html',
  styleUrls: [ './user-group-edit.component.css' ]
})
export class UserGroupEditComponent implements OnInit {

  treeControl = new NestedTreeControl<GroupTreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<GroupTreeNode>();

  constructor() {
  }

  @Input()
  groupList: UserGroup[] = [];

  ngOnInit(): void {
    this.dataSource.data = this.formatData(this.groupList)
  }

  formatData(data: UserGroup[]): GroupTreeNode[] {

    return TREE_DATA;
  }

  hasChild = (_: number, node: GroupTreeNode) => !!node.children && node.children.length > 0;

}
