import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPageComponent } from "./pages/root-page/root-page.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { PropertyPageComponent } from "./pages/property-page/property-page.component";
import { DirectoryPageComponent } from "./pages/directory-page/directory-page.component";
import { FlagPageComponent } from "./pages/flag-page/flag-page.component";
import { LangPageComponent } from "./pages/lang-page/lang-page.component";
import { BlockPageComponent } from "./pages/block-page/block-page.component";
import { ContentPageComponent } from "./pages/content-page/content-page.component";
import { LogPageComponent } from "./pages/log-page/log-page.component";
import { ReportPageComponent } from "./pages/report-page/report-page.component";

const routes: Routes = [
  { path: 'directory', component: DirectoryPageComponent },
  { path: 'content', component: BlockPageComponent },
  { path: 'content/:id', component: ContentPageComponent },
  { path: 'property', component: PropertyPageComponent },
  { path: 'lang', component: LangPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'flag', component: FlagPageComponent },
  { path: 'log', component: LogPageComponent },
  { path: 'report', component: ReportPageComponent },
  { path: '', component: RootPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
