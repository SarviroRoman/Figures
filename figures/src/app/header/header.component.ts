import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  // Переделать: Динамическая строка!
  title : string = 'Navbar text with an inline element';

  constructor() { 
    
  }

  ngOnInit() {
  }

}
