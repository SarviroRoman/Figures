import { Component } from '@angular/core';

import { FormControl, Validators, FormGroup, ValidatorFn, ValidationErrors} from '@angular/forms';

import { Figure } from '../models/figure'
import { FigureService } from '../services/figure.service';

@Component({
  selector: 'app-add-figures',
  templateUrl: 'add-figures.component.html',
  styleUrls: ['add-figures.component.css'],
})


export class AddFiguresComponent {

  public figures: Figure[];

  private circleControl : FormControl;
  private squareControl : FormControl;
  private rectangleControl : FormGroup;
  private triangleControl : FormGroup;

  constructor (
    private figureService: FigureService
  ) {}

  ngOnInit() {
    this.getFigures();

    this.circleControl = new FormControl(10, Validators.min(0));
    this.squareControl = new FormControl(10, Validators.min(0));

    this.rectangleControl = new FormGroup({
      X1: new FormControl(10, Validators.min(0)),
      Y1: new FormControl(10, Validators.min(0)),
      X2: new FormControl(20, Validators.min(0)),
      Y2: new FormControl(20, Validators.min(0)),
    });

    
    this.triangleControl = new FormGroup({
      a : new FormControl(3 , Validators.required),
      b : new FormControl(4 , Validators.required),
      c : new FormControl(5, Validators.required),
    }, { validators: triangleValidator });

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


  public addCircle(r: number): void {
    const type = 'Circle';
    const area = Math.pow(r,2) * Math.PI;

    this.add(type, area);
  }

  public addSquare(l: number): void {
    const type = 'Square';
    const area = Math.pow(l,2);

    this.add(type, area);
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

  public addTriangle(points : object): void {

    const a = points['a'];
    const b = points['b'];
    const c = points['c'];

    const type = 'Triangle';  
    const p = (a+b+c)/2;
    const area = Math.sqrt(p*(p-a)*(p-b)*(p-c));

    this.add(type, area);
  }

}

export const triangleValidator: ValidatorFn = (triangleControl: FormGroup): ValidationErrors | null => {

  const a = triangleControl.get('a').value;
  const b = triangleControl.get('b').value;
  const c = triangleControl.get('c').value;

  if (a <= 0 || b <= 0 || c <= 0){
    return { 'identityRevealed': true };
  }

  if (a+b<=c || a+c<=b || b+c<=a){
    return { 'identityRevealed': true };
  }

  return null;
}