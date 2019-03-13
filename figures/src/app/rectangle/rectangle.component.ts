import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FigureService } from '../services/figure.service';
import { APP } from '../application-constants';

@Component({
  selector: 'app-rectangle',
  templateUrl: 'rectangle.component.html',
  styleUrls: ['rectangle.component.css']
})

export class RectangleComponent{
  
  private rectangleControl : FormGroup;
  public responseIsSuccess: boolean = false; 
  public showAlertMessage: boolean = false;
  public alertMessage: string;

  constructor (
    private figureService: FigureService
  ) {}

  ngOnInit() {
    this.rectangleControl = new FormGroup({
      X1: new FormControl(10, [Validators.required]),
      Y1: new FormControl(10, [Validators.required]),
      X2: new FormControl(20, [Validators.required]),
      Y2: new FormControl(20, [Validators.required]),
    });
  }


  private addRectangle(): void {
    
    this.responseIsSuccess = true;
    const area = this.getRectangleArea();

    this.figureService.addFigure(
    {
      type: APP.types.rectangle, 
      area
    })
      .subscribe( response => {
        if(response.success){
          this.responseIsSuccess = false;
          this.showAlertMessage = true;
          this.alertMessage = `Rectangle #${response['id']} with ${Math.round(area * 1000) / 1000} area successfully added`;
        }
      });
  }

  public getRectangleArea(): number {
    const points = this.rectangleControl.value;

    const x1 = points['X1'];
    const y1 = points['Y1'];
    const x2 = points['X2'];
    const y2 = points['Y2'];

    const a = x2-x1;
    const b = y2-y1;

    return Math.abs(a*b);
  }

}