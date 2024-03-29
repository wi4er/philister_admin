import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
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
import { BlockPageComponent } from './pages/block-page/block-page.component';
import { BlockListComponent } from './components/block-list/block-list.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { ChangeLogListComponent } from './components/change-log-list/change-log-list.component';
import { FetchLogListComponent } from './components/fetch-log-list/fetch-log-list.component';
import { LogPageComponent } from './pages/log-page/log-page.component';
import { AddButtonComponent } from "./components/add-button/add-button.component";
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { UserGroupListComponent } from './components/user-group-list/user-group-list.component';
import { UserContactListComponent } from './components/user-contact-list/user-contact-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserContactFormComponent } from './components/user-contact-form/user-contact-form.component';
import { UserGroupFormComponent } from './components/user-group-form/user-group-form.component';
import { MatSelectModule } from "@angular/material/select";
import { FlagEditComponent } from './components/flag-edit/flag-edit.component';
import { PropertyEditComponent } from './components/property-edit/property-edit.component';
import { UserGroupEditComponent } from './components/user-group-edit/user-group-edit.component';
import { MatTreeModule } from "@angular/material/tree";
import { PersonalPageComponent } from './pages/personal-page/personal-page.component';
import { BlockFormComponent } from './components/block-form/block-form.component';
import { ElementListComponent } from './components/element-list/element-list.component';
import { ElementFormComponent } from './components/element-form/element-form.component';
import { SectionListComponent } from './components/section-list/section-list.component';
import { SectionFormComponent } from './components/section-form/section-form.component';
import { SectionEditComponent } from './components/section-edit/section-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    RootPageComponent,
    MainMenuComponent,
    UserListComponent,
    UserPageComponent,
    PropertyPageComponent,
    PropertyListComponent,
    PropertyFormComponent,
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
    BlockPageComponent,
    BlockListComponent,
    ContentPageComponent,
    ChangeLogListComponent,
    FetchLogListComponent,
    LogPageComponent,
    AddButtonComponent,
    ItemMenuComponent,
    UserGroupListComponent,
    UserContactListComponent,
    UserFormComponent,
    UserContactFormComponent,
    UserGroupFormComponent,
    FlagEditComponent,
    PropertyEditComponent,
    UserGroupEditComponent,
    PersonalPageComponent,
    BlockFormComponent,
    ElementListComponent,
    ElementFormComponent,
    SectionListComponent,
    SectionFormComponent,
    SectionEditComponent,
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
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    MatMenuModule,
    MatChipsModule,
    MatTreeModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
