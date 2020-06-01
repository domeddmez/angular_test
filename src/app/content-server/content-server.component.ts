import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-server',
  templateUrl: './content-server.component.html',
  styleUrls: ['./content-server.component.css'],
})
export class ContentServerComponent implements OnInit {
  serverStatus = 'office';

  constructor() {
    this.serverStatus = Math.random() < 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {}
}
