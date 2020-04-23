import { Component, OnInit } from '@angular/core';
import { ComponentAdapter } from 'web-adapter-js';

@Component({
  selector: 'app-watch',
  template: `<flapp-watch></flapp-watch>`,
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  private microAdapter = new ComponentAdapter();

  ngOnInit(): void {
    this.microAdapter.loadComponents([
        {name: 'fp-watch', src: 'http://localhost:8083/build/bundle.js'},
    ]);
  }
}
