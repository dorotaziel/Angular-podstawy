import { Component, OnInit, Input,  ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // - wyłączenie enkapsulacji dla konkretnego componentu.
                                        // Native - używa technologii shadow DOM, 
                                        // Używa domyślnej technologii angulara, gdzie każdy każdy component korzysta z własnego css
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
