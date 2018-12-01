import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-ngSwitch-Drective';

  num : number =0;

  showMe : boolean;

  items : Item[] = [
        {name:"One", val:1},
        {name:"Two", val:2},
        {name:"Three", val:3},
        {name:"Four", val:4},
  ];

  selectedValue: string= "One";
}
