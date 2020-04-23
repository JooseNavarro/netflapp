import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesAdapter } from 'web-adapter-js';


@Injectable()
export class NavigationServices {

  private routesAdapter = new RoutesAdapter();

  constructor(private router: Router) {  }

  public factory(): void {
    this.routesAdapter.on()
      .subscribe(({ route, option }) => {
        this.router.navigate([ route ],  { queryParams: option});
      });
  }
}
