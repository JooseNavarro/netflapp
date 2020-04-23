import { Component, OnInit } from '@angular/core';
import { ComponentAdapter } from 'web-adapter-js';

@Component({
  selector: 'app-account',
  template: `<flapp-account></flapp-account>`,
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  private microAdapter = new ComponentAdapter();

  ngOnInit(): void {
    this.microAdapter
      .loadComponents([
        {name: 'fp-account', src: 'http://localhost:8082/build/bundle.js'},
      ]);
  }

}
