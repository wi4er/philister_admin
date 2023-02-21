import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../../graph/types';

@Component({
  selector: 'app-section-edit',
  templateUrl: './section-edit.component.html',
  styleUrls: [ './section-edit.component.css' ],
})
export class SectionEditComponent implements OnInit {

  constructor() {
  }

  @Input()
  list: Section[] = [];

  @Input()
  onChange(id: any) {
    console.log(id);
  }

  @Input()
  id?: number;

  ngOnInit(): void {

  }

  isSelected(item: Section): boolean {
    return item.id === this.id;
  }

}
