import { Component, OnInit } from '@angular/core';
import { ComponentAdapter } from 'web-adapter-js';

@Component({
  selector: 'app-browse',
  template: `<net-browse></net-browse>`,
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  private microAdapter = new ComponentAdapter();

  ngOnInit(): void {
    this.microAdapter
      .loadComponents([
        {name: 'fp-browse', src: 'http://localhost:8081/main.js'}
      ]);
  }
}
