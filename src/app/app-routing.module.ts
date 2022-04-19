import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'devjamesnjoroge', component: MyProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/devjamesnjoroge', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
