import { Component } from '@angular/core';
import { FormGroup, ValidatorFn, ValidationErrors, FormControl, Validators } from '@angular/forms';

import { Figure } from '../models/figure';
import { FigureService } from '../services/figure.service';

@Component({
  selector: 'app-triangle',
  templateUrl: 'triangle.component.html',
  styleUrls: ['triangle.component.css']
})

export class TriangleComponent{
  public figures: Figure[];
  private triangleControl : FormGroup;

  constructor (
    private figureService: FigureService
  ) {}

  ngOnInit() {
    this.getFigures();

    this.triangleControl = new FormGroup({
      a : new FormControl(3),
      b : new FormControl(4),
      c : new FormControl(5),
    }, { validators: this.triangleValidator });

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

  public addTriangle(points : object): void {

    const a = points['a'];
    const b = points['b'];
    const c = points['c'];

    const type = 'Triangle';  
    const p = (a+b+c)/2;
    const area = Math.sqrt(p*(p-a)*(p-b)*(p-c));

    this.add(type, area);
  }

  triangleValidator: ValidatorFn = (triangleControl: FormGroup): ValidationErrors | null => {

    const a = triangleControl.get('a').value;
    const b = triangleControl.get('b').value;
    const c = triangleControl.get('c').value;
  
    if (a <= 0 || b <= 0 || c <= 0){
      return {triangleValidator: {message: 'Where did you see the negative side length of the triangle?'}};
    }
  
    if (a+b<=c || a+c<=b || b+c<=a){
        return {triangleValidator: {message: 'I can not build a triangle with such a side'}};
    }
  
    return null;
  }

}