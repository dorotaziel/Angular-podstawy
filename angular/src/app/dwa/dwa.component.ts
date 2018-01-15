import { Component } from "@angular/core";
import { setTimeout } from "timers";

@Component({
    selector: 'app-dwa',
    templateUrl: './dwa.component.html'
})
export class DwaComponent{
name = '';
dangerstatus = 'danger';
dangerLevelStatus = 'Niebezpieczeństwo wykryte!';




getDangerStatus(){
   return this.dangerstatus;
}

allowDanger = false;

constructor(){
    setTimeout(() => {
        this.allowDanger = true;
    }, 3000);
}

onDanger(){
    this.dangerLevelStatus = 'Niebezpieczeństwo usunięte!';
}
}

