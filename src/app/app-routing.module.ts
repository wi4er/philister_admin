import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';
import { DirectoryPageComponent } from './pages/directory-page/directory-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { LogPageComponent } from './pages/log-page/log-page.component';
import { LangListComponent } from './components/lang-list/lang-list.component';
import { FlagListComponent } from './components/flag-list/flag-list.component';
import { PersonalPageComponent } from "./pages/personal-page/personal-page.component";
import { BlockListComponent } from "./components/block-list/block-list.component";

const routes: Routes = [
  { path: 'personal', component: PersonalPageComponent },
  { path: 'directory', component: DirectoryPageComponent },
  { path: 'content', component: BlockListComponent },
  { path: 'content/:id', component: ContentPageComponent },
  { path: 'property', component: PropertyPageComponent },
  { path: 'lang', component: LangListComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'flag', component: FlagListComponent },
  { path: 'log', component: LogPageComponent },
  { path: '', component: RootPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
