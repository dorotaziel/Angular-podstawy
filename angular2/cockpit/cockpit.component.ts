import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  allowButton = false;


  constructor() { 
    setTimeout(() =>{
      this.allowButton = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onAddServer() {
  //  this.serverElements.push({
  //    type: 'server',
  //    name: this.newServerName,
  //    content: this.newServerContent
  //  });
  }

  onAddBlueprint() {
  //  this.serverElements.push({
   //   type: 'blueprint',
 //     name: this.newServerName,
 //     content: this.newServerContent
    };
  }
}
