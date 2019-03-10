import { Component } from '@angular/core';

import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

import { Figure } from '../models/figure'
import { FigureService } from '../services/figure.service';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.css'],
})

export class FiguresComponent {
  
  public figures: Figure[];
  public showSpinner: boolean = true;
  public showDeleteSpinner: boolean = false;
  public showAlertMessage: boolean = false;
  public alertMessage: string;

  constructor (
    private figureService: FigureService
  ) {}

  ngOnInit() {
    this.getFigures();
  }
  
  private getFigures(): void {
    this.figureService.getFigures()
      .subscribe(figures => {
        this.figures = figures.sort((first,second) => first.area-second.area);
        this.showSpinner = false;
      });

  }
  
  public delete(id: number): void {
    this.showDeleteSpinner = true;

    setTimeout( () =>{
      this.figureService.deleteFigure(id)
        .subscribe( response => {
          if(response.success){
            const index = this.figures.findIndex(figure => figure.id === id);

            this.figures.splice(index,1);
            
            this.showDeleteSpinner = false;
            this.alertMessage = `${id}`;
            this.showAlertMessage = true;
            setTimeout(() => this.showAlertMessage = false, 3000);
          }
        });
    }, 1500);

  }

}