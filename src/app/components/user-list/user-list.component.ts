import { Component, Input, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../../graph/types";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  list: User[] = [];

  constructor(
    private userService: UserService
  ) { }

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
