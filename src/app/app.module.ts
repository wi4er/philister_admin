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
import { PropertyPageComponent } from './pages/property-page/property-page.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";
import { TableSettingsComponent } from './components/table-settings/table-settings.component';
import { DirectoryListComponent } from './components/directory-list/directory-list.component';
import { DirectoryPageComponent } from './pages/directory-page/directory-page.component';
import { MatChipsModule } from "@angular/material/chips";
import { DirectoryFormComponent } from './components/directory-form/directory-form.component';
import { FlagListComponent } from './components/flag-list/flag-list.component';
import { FlagFormComponent } from './components/flag-form/flag-form.component';
import { FlagPageComponent } from './pages/flag-page/flag-page.component';
import { ValueFormComponent } from './components/value-form/value-form.component';
import { LangListComponent } from './components/lang-list/lang-list.component';
import { LangFormComponent } from './components/lang-form/lang-form.component';
import { LangPageComponent } from './pages/lang-page/lang-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPopupComponent,
    RootPageComponent,
    MainMenuComponent,
    UserListComponent,
    UserPageComponent,
    PropertyPageComponent,
    PropertyListComponent,
    PropertyFormComponent,
    TableSettingsComponent,
    DirectoryListComponent,
    DirectoryPageComponent,
    DirectoryFormComponent,
    FlagListComponent,
    FlagFormComponent,
    FlagPageComponent,
    ValueFormComponent,
    LangListComponent,
    LangFormComponent,
    LangPageComponent,
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
    MatGridListModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    MatMenuModule,
    MatChipsModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
