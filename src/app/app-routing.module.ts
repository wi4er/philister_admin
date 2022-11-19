import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPageComponent } from "./pages/root-page/root-page.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { PropertyPageComponent } from "./pages/property-page/property-page.component";
import { DirectoryPageComponent } from "./pages/directory-page/directory-page.component";
import { FlagPageComponent } from "./pages/flag-page/flag-page.component";

const routes: Routes = [
  { path: 'directory', component: DirectoryPageComponent },
  { path: 'property', component: PropertyPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'flag', component: FlagPageComponent },
  { path: '', component: RootPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
