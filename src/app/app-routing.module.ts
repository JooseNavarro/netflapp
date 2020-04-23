import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WatchComponent } from './components/watch/watch.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app', component: DashboardComponent, children: [
      { path: 'browse', component: BrowseComponent },
      { path: 'watch', component: WatchComponent },
      { path: 'account', component: AccountComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
