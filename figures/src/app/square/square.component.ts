import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

import { FigureService } from '../services/figure.service';
import { APP } from '../application-constants';

@Component({
  selector: 'app-square',
  templateUrl: 'square.component.html',
  styleUrls: ['square.component.css']
})

export class SquareComponent{

  private squareControl : FormControl;
  public responseIsSuccess: boolean = false; 
  public showAlertMessage: boolean = false;
  public alertMessage: string;

  constructor (
    private figureService: FigureService
  ) {}

  ngOnInit() {
    this.squareControl = new FormControl(10, [this.lengthValidator]);
  }

  private addSquare(): void {  
    this.responseIsSuccess = true;
    const area = this.getSquareArea();

    this.figureService.addFigure(
    {
      type: APP.types.square, 
      area
    })
      .subscribe( response => {
        if(response.success){
          this.responseIsSuccess = false;
          this.showAlertMessage = true;
          this.alertMessage = `Square #${response['id']} with ${Math.round(area * 1000) / 1000} area successfully added`;
        }
      });
  }

  public getSquareArea(): number {
    return Math.pow(this.squareControl.value,2);
  }

  private lengthValidator(squareControl: FormControl){
    if(squareControl.value > 0){
      return null;
    }
    return { lengthValidator: {message: 'No, well, of course I can square it and get a square, but where have you seen it so long?'} };
  }

}  
