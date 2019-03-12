import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';

import { FigureService } from '../services/figure.service';
import { APP } from '../application-constants';

@Component ({
  selector: 'app-circle',
  templateUrl: 'circle.component.html',
  styleUrls: ['circle.component.css'],
})

export class CircleComponent{

  private circleControl: FormControl;
  public responseIsSuccess: boolean = false; 
  public showAlertMessage: boolean = false;
  public alertMessage: string;

  constructor (
    private figureService: FigureService
  ) {}

  ngOnInit() {
    this.circleControl = new FormControl(10, [this.radiusValidator]);
  }
  

  private getCircleArea(): number {
    return Math.pow(this.circleControl.value,2) * Math.PI;
  }
  

  public addCircle(): void {
    this.responseIsSuccess = true;
    setTimeout( () => {
      const area = this.getCircleArea();

      this.figureService.addFigure(
      {
        type: APP.types.circle, 
        area
      })
        .subscribe( response => {
          if(response.success){
            this.responseIsSuccess = false;
            this.showAlertMessage = true;
            this.alertMessage = `Circle #${response['id']} with ${Math.round(area * 1000) / 1000} area successfully added`;
          }
        } );
    }, 500)
    
  
  }

  private radiusValidator(circleControl: FormControl){
    if(circleControl.value > 0){
      return null;
    }
    return { radiusValidator: {message: 'No, well, of course I can square it and get a square, but where have you seen it so long?'} };
  }

}