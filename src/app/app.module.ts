import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WatchComponent } from './components/watch/watch.component';
import { Adapter } from 'web-adapter-js';
import { NavigationServices } from './services/navigation.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseComponent,
    AccountComponent,
    DashboardComponent,
    WatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ NavigationServices ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {
  constructor() {
    const adapter = new Adapter();
    adapter.init(['angular']);
  }
}
