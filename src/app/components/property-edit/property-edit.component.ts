import { Component, Input, OnInit } from '@angular/core';
import { Lang, Property } from "../../../graph/types";

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: [ './property-edit.component.css' ]
})
export class PropertyEditComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  list: Property[] = [];

  @Input()
  lang: Lang[] = [];

  @Input()
  edit: { [property: string]: { [lang: string]: string } } = {};

}
