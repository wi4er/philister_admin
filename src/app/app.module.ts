import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthPopupComponent } from './components/auth-popup/auth-popup.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { RootPageComponent } from './pages/root-page/root-page.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { GraphQLModule } from '../graph/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatRadioModule } from "@angular/material/radio";
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    AuthPopupComponent,
    RootPageComponent,
    MainMenuComponent,
    UserListComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatRadioModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
