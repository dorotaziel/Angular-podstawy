import { Component, OnInit, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bptCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';


  constructor() { 
  }

  ngOnInit() {
  }

  onAddServer(ServerNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: ServerNameInput.value, 
      serverContent: this.newServerContent});
}

onAddBlueprint(ServerNameInput: HTMLInputElement) {
  this.blueprintCreated.emit({
    serverName: ServerNameInput.value, 
    serverContent: this.newServerContent});
}
  }

