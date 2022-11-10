import { Component, OnInit } from '@angular/core';
import { PropertyService } from "../../services/property.service";
import { AddPropertyItemGQL, Property, PropertyInput, PropertyPropertyInput } from "../../../graph/types";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {

  list: Property[] = [];
  id: string = '';
  values: {[field: string]: string} = {};

  constructor(
    private propertyService: PropertyService,
    private addItemMutation: AddPropertyItemGQL,
  ) { }

  ngOnInit(): void {
    this.propertyService.fetchPropertyList()
      .then(res => this.list = res);
  }

  toInput(): PropertyInput {
    const addition: PropertyInput = {
      id: this.id,
      property: [],
    } as PropertyInput;

    for (const key in this.values) {
      addition.property?.push({
        value: this.values[key],
        property: key
      } as PropertyPropertyInput);
    }

    return addition;
  }

  saveItem() {
    this.addItemMutation.mutate({
      item: this.toInput(),
    }).subscribe(res => {
      console.log(res.data)
    });
  }

}
