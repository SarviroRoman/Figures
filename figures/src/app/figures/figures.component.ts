import { Component } from '@angular/core';

import { Figure } from '../models/figure'
import { FigureService } from '../services/figure.service';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
})

export class FiguresComponent {
  
  public figures: Figure[];

  constructor (
    private figureService: FigureService
  ) {}

  ngOnInit() {
    this.getFigures();
  }
  
  private getFigures(): void {
    this.figureService.getFigures().subscribe(figures => this.figures = figures);
    // this.figures = [...FIGURES].sort((a, b) => {
    //   const res = compare(a['area'], b['area']);
    //   return res;
    // });
  }
  
  private delete(figure: Figure): void {
    this.figures = this.figures.filter(f => f !== figure);
    this.figureService.deleteFigure(figure).subscribe();
  }

}

// export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
