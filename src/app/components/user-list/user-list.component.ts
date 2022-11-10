import { Component, Input, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Property, User } from "../../../graph/types";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  list: User[] = [];
  property: Property[] = [
    {id: 'FIRST_NAME'},
    {id: 'SECOND_NAME'},
    {id: 'GENDER'},
    {id: 'PROP_1'},
    {id: 'PROP_2'},
    {id: 'PROP_3'},
    {id: 'PROP_4'},
    {id: 'PROP_5'},
    {id: 'PROP_6'},
    {id: 'PROP_7'},
    {id: 'PROP_8'},
  ];

  constructor(
    private userService: UserService
  ) { }

  getPropertyColumns() {
    const list = ['id', 'login'];

    for (const item of this.property) {
      list.push('property_' + item.id);
    }

    return list;
  }

  fetchList() {
    this.userService.fetchList()
      .subscribe(res => {
        this.list = res.data.user.list as User[];
      });
  }

  @Input()
  limit: number = 0;

  ngOnInit(): void {
    this.fetchList();
  }

}
