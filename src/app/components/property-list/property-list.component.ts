import { Component, OnInit } from '@angular/core';
import { PropertyService } from "../../services/property.service";
import { Property } from "../../../graph/types";
import { MatDialog } from "@angular/material/dialog";
import { PropertyFormComponent } from "../property-form/property-form.component";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: [ './property-list.component.css' ]
})
export class PropertyListComponent implements OnInit {

  list: Map<string, string>[] = [];
  columns: Set<string> = new Set();
  selection = new SelectionModel<string>(true, []);

  constructor(
    private propertyService: PropertyService,
    public dialog: MatDialog,
  ) {
  }

  formatData(data: Property[]) {
    for (const item of data) {
      const line = new Map<string, string>([['id', item.id]]);

      for(const prop of item?.property ?? []) {
        this.columns.add('property_' + prop.property.id);
        line.set('property_' + prop.property.id, prop.value);
      }

      this.list.push(line);
    }
  }

  ngOnInit(): void {
    this.propertyService.fetchPropertyList()
      .then(res => this.formatData(res));
  }

  getColumns() {
    return [ 'select', 'id', ...this.columns ];
  }

  addProperty() {
    this.dialog.open(PropertyFormComponent, {
      width: '1000px'
    });

    console.log('ADD')
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.list.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    // this.selection.select(...this.list.keys());
  }

  checkboxLabel(row?: Property): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row.id) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
