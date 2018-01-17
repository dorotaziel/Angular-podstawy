import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
serverId = 10;
serverStatus = 'online';

constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
    this.serverId = Math.random();
}

getServerStatus(){
    return this.serverStatus;
}

getColour(){
    return this.serverStatus === 'online' ? 'green' : 'red';
}
}
