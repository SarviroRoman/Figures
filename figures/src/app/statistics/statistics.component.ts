import { Component } from '@angular/core';
import { FIGURES } from '../mock-figures';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
})

export class StatisticsComponent {

  figures = FIGURES;

}
