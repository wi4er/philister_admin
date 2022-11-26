import { Component, OnInit } from '@angular/core';
import { Block, GetBlockListGQL } from "../../../graph/types";


interface MenuBlock extends Block {
  name: string;
}


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: [ './main-menu.component.css' ]
})
export class MainMenuComponent implements OnInit {

  blockList?: MenuBlock[];

  constructor(
    private getBlockList: GetBlockListGQL
  ) {
  }

  ngOnInit(): void {
    this.getBlockList.fetch()
      .subscribe(res => {
        this.blockList = res.data.block.list as unknown as MenuBlock[];
      });
  }

}
