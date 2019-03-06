import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

import { Figure } from '../models/figure';
import { FigureService } from '../services/figure.service';

@Component({
  selector: 'app-square',
  templateUrl: 'square.component.html',
  styleUrls: ['square.component.css']
})

export class SquareComponent{
  public figures: Figure[];
  private squareControl : FormControl;

  constructor (
    private figureService: FigureService
  ) {}

  ngOnInit() {
    this.getFigures();
    this.squareControl = new FormControl(10, [this.lengthValidator]);
  }

  private getFigures(): void {
    this.figureService.getFigures().subscribe(figures => this.figures = figures);
  }

  private add(type: string, area: number): void {  
    if (!type) { return; }
    if (!area) { return; }
    
    this.figureService.addFigure({ type, area } as Figure)
      .subscribe(figure => this.figures.push(figure));
  }

  public addSquare(l: number): void {
    const type = 'Square';
    const area = Math.pow(l,2);

    this.add(type, area);
  }

  private lengthValidator(squareControl: FormControl){
    if(squareControl.value > 0){
      return null;
    }
    return { lengthValidator: {message: 'No, well, of course I can square it and get a square, but where have you seen it so long?'} };
  }

}  
