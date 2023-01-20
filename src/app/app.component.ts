import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  title = 'Philister Admin';

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
  ) {
  }

  async logout() {
    await this.userService.logout();
  }

  async ngOnInit() {
    const user = await this.userService.fetchMyself();

    if (!user) this.dialog.open(AuthFormComponent);
  }

  async ngDoCheck() {
    console.log('UPDATE')
  }
}
