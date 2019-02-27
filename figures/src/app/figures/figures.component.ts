import { Component } from '@angular/core';

interface Figure {
  type: string;
  area: number;
}

const FIGURES: Figure[] = [
  {
    type: 'Circle',
    area: 10,
  },
  {
    type: 'Square',
    area: 20,
  },
  {
    type: 'Rectangle',
    area: 15,
  },
  {
    type: 'Triangle',
    area: 1,
  },
];

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
})
export class FiguresComponent {
  
  figures = FIGURES;
  
}
