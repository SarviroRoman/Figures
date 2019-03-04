import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  // Переделать: Динамическая строка!
  public title : string = 'Navbar text with an inline element';

}
