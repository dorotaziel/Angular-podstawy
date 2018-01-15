import { Component, style } from "@angular/core";

@Component({
    selector: 'app-proba',
    templateUrl: './proba.component.html',
    styleUrls: ['./proba.component.css']
})
export class ProbaComponent{
    nazwa = '';
    allowCreate = false;
    server = 'Brak serwerów :(';
    serverCreated = false;
    servers = ['Server1', 'Server2'];

    constructor(){
        setTimeout(() =>{
            this.allowCreate = true;
        }, 5000)
    }

    onCreateServer(){
        this.serverCreated = true;
        this.servers.push(this.nazwa);
        
    }

    getColor(){
        return this.allowCreate === true ? 'black' : 'white';
    }
}