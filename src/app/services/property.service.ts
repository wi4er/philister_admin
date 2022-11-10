import { Injectable } from '@angular/core';
import { GetPropertyListGQL, Property } from "../../graph/types";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private getPropertyListQuery: GetPropertyListGQL
  ) { }

  fetchPropertyList(): Promise<Property[]> {
    return firstValueFrom(this.getPropertyListQuery.fetch())
      .then(res => res.data.property.list as Property[]);
  }

  postPropertyItem() {

    return
  }
}
