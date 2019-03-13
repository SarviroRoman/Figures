import { Component } from '@angular/core';

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

  public page: number = 1;
  public pageSize: number = 6;
  public maxSize: number = 7;
  public collectionSize: number;

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
        this.collectionSize = this.figures.length;
      });
  }
  
  public delete(id: number): void {
    this.showDeleteSpinner = true;

    this.figureService.deleteFigure(id)
      .subscribe( response => {
        if(response.success){
          const index = this.figures.findIndex(figure => figure.id === id);

          this.figures.splice(index,1);
          
          this.showDeleteSpinner = false;
          this.alertMessage = `${id}`;
          this.showAlertMessage = true;
        }
      });
    
    

  }

}