import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Figure } from '../models/figure';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const figures = [
      {
        id: 1,
        type: 'Circle',
        area: 2000,
      },
      {
        id: 2,
        type: 'Square',
        area: 20,
      },
      {
        id: 3,
        type: 'Rectangle',
        area: 15,
      },
      {
        id: 4,
        type: 'Triangle',
        area: 1,
      },
    ];
    return {figures};
  }

  
  genId(figures: Figure[]): number {
    return figures.length > 0 ? Math.max(...figures.map(hero => hero.id)) + 1 : 1;
  }
}
