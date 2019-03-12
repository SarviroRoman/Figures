import { Component } from '@angular/core';
import { FormGroup, ValidatorFn, ValidationErrors, FormControl, Validators } from '@angular/forms';

import { FigureService } from '../services/figure.service';
import { APP } from '../application-constants';

@Component({
  selector: 'app-triangle',
  templateUrl: 'triangle.component.html',
  styleUrls: ['triangle.component.css']
})

export class TriangleComponent{
  private triangleControl : FormGroup;
  public responseIsSuccess: boolean = false; 
  public showAlertMessage: boolean = false;
  public alertMessage: string;

  constructor (
    private figureService: FigureService
  ) {}

  ngOnInit() {
    this.triangleControl = new FormGroup({
      a : new FormControl(3),
      b : new FormControl(4),
      c : new FormControl(5),
    }, { validators: this.triangleValidator });
  }

  private addTriangle(): void {
    this.responseIsSuccess = true;
    setTimeout( () => {
      const area = this.getTriangleArea();

      this.figureService.addFigure(
      {
        type: APP.types.triangle, 
        area
      })
        .subscribe( response => {
          if(response.success){
            this.responseIsSuccess = false;
            this.showAlertMessage = true;
            this.alertMessage = `Triangle #${response['id']} with ${Math.round(area * 1000) / 1000} area successfully added`;
          }
        } );
    }, 500)
    
  }

  public getTriangleArea(): number {
    const points = this.triangleControl.value;

    const a = points['a'];
    const b = points['b'];
    const c = points['c'];

    const p = (a+b+c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));

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