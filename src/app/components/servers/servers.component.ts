import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'Predefined server name';
  servers = ['server1', 'server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    let num = Math.floor(Math.random()*10);
    this.serverCreationStatus = 'Server '+ num +' was created succesfuly!';
    this.servers = this.servers.concat('server'+num);
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
