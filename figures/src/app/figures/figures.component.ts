import { Component } from '@angular/core';
import {FIGURES } from '../mock-figures';


@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
})
export class FiguresComponent {
  
  figures = FIGURES;
  
}
