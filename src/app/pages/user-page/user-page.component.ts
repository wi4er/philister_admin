import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: [ './user-page.component.css' ]
})
export class UserPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  pages: { [key: number]: string } = {
    0: 'user',
    1: 'group',
    2: 'contact'
  }

  selected = new FormControl(0);

  ngOnInit(): void {
    this.route.queryParams.subscribe(value => {
      for (const key in this.pages) {
        if (this.pages[key] === value['page']) {
          this.selected.setValue(+key);
        }
      }
    });
  }

  handleChange(index: number) {
    this.router.navigate(
      [ '/user' ],
      { queryParams: { page: this.pages[index] } }
    );
  }

}
