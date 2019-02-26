import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FiguresComponent } from './figures/figures.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { addFiguresComponent } from './addFigures/addFigures.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/figures',
        pathMatch: 'full',
      },
      {
        path: 'figures', 
        component: FiguresComponent
      },
      {
        path: 'statistics', 
        component: StatisticsComponent
      }, 
      {
        path: 'addFigures',
        component: addFiguresComponent
      },
      {
        path: '**',
        redirectTo: '/figures',
      },
    ])
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {

}