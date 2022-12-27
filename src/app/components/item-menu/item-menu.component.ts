import { Component, Input, OnInit } from '@angular/core';
import { Flag } from "../../../graph/types";

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  onDelete() {
    console.log('DELETE EXPECTED');
  }

  @Input()
  onEdit() {
    console.log('DELETE EXPECTED');
  }

  flags: Flag[] = [];

  @Input()
  onFlag(id: string) {

  }

}
