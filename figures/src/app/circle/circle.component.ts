import { Component } from '@angular/core';

import { Figure } from '../models/figure';
import { FormControl, Validators, FormGroup, ValidatorFn, ValidationErrors} from '@angular/forms';
import { FigureService } from '../services/figure.service';

@Component ({
  selector: 'app-circle',
  templateUrl: 'circle.component.html',
  styleUrls: ['circle.component.css'],
})

export class CircleComponent{
  public figures: Figure[];
  private circleControl : FormControl;

  constructor (
    private figureService: FigureService
  ) {}

  ngOnInit() {
    this.getFigures();
    this.circleControl = new FormControl(10, [this.radiusValidator]);
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
  
    public addCircle(r: number): void {
      const type = 'Circle';
      const area = Math.pow(r,2) * Math.PI;
  
      this.add(type, area);
    }

    private radiusValidator(circleControl: FormControl){
      if(circleControl.value > 0){
        return null;
      }
      return { radiusValidator: {message: 'Incorrect radius'} };
    }
}