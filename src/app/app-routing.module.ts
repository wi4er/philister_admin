import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPageComponent } from "./pages/root-page/root-page.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";

const routes: Routes = [
  { path: 'user', component: UserPageComponent },
  { path: '', component: RootPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
