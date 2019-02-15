import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .server-item {padding:5px 10px; border: solid 1px #CDCDCD;}
    .white {color: white}
  `]
})
export class ServerComponent {

  // public properties
  serverId: number = 0;
  serverStatus: string = 'offline';

  constructor() {
    let num = Math.floor(Math.random()*10);
    this.serverId = num;
    this.serverStatus = num > 5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
