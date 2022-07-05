import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { faHouse, faMessage, faBell } from '@fortawesome/free-solid-svg-icons';
// import { faHouse } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clicked = 0;
  click() {
    this.clicked++;
    this.title = `Clicked: ${this.clicked}`;
    this.setTitle(this.title);
  }
  title = `Clicked: ${this.clicked}`;

  faHouse = faHouse;
  faMessage = faMessage;
  faBell = faBell;

  constructor(private titleService: Title) {}

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit() {
    this.setTitle(this.title);
  }
}
