import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  active: string = 'List';
  checkActive(active: string): void{
    this.active = active;
  }
}
