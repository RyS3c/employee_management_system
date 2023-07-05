import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Employees Records';
search: any;

handleClick() {
  console.log('you clicked it!');
}
}
