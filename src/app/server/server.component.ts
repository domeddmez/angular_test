import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  name = 'dome';
  serverCreationStatus = 'No server create';
  serverName = '';
  serverStatus = 'office';
  servers = [];
  constructor() {
    this.serverStatus = Math.random() < 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.servers.length + 1);
    this.serverCreationStatus = 'Server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
