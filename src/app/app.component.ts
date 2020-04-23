import { Component, OnInit } from '@angular/core';
import { NavigationServices } from './services/navigation.services';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private navigation: NavigationServices) {  }

  ngOnInit(): void {
    this.navigation.factory();
  }
}
