import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GuideComponent } from './guide/guide.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: GuideComponent },
  { path: 'sidenav', component: SidenavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
