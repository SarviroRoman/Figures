import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Figure } from '../models/figure';
import { FigureService } from '../services/figure.service';

@Component({
  selector: 'app-rectangle',
  templateUrl: 'rectangle.component.html',
  styleUrls: ['rectangle.component.css']
})

export class RectangleComponent{
  
  public figures: Figure[];
  private rectangleControl : FormGroup;

  constructor (
    private figureService: FigureService
  ) {}

  ngOnInit() {
    this.getFigures();

    this.rectangleControl = new FormGroup({
      X1: new FormControl(10, [Validators.required]),
      Y1: new FormControl(10, [Validators.required]),
      X2: new FormControl(20, [Validators.required]),
      Y2: new FormControl(20, [Validators.required]),
    });
  }

  private getFigures(): void {
    this.figureService.getFigures().subscribe(figures => this.figures = figures);
  }

  private add(type: string, area: number): void {
    type = type.trim();

    if (!type) { return; }
    if (!area) { return; }
    
    this.figureService.addFigure({ type, area } as Figure)
      .subscribe(figure => this.figures.push(figure));
  }

  public addRectangle(points : object): void {
    const x1 = points['X1'];
    const y1 = points['Y1'];
    const x2 = points['X2'];
    const y2 = points['Y2'];
    
    const type = 'Rectangle';
    const a = x2-x1;
    const b = y2-y1;
    const area = Math.abs(a*b);

    this.add(type, area);
  }

}