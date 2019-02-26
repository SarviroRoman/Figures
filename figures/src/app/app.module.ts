import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FiguresComponent } from './figures/figures.component';
import { AppRoutingModule } from './app-routing-module';
import { StatisticsComponent } from './statistics/statistics.component';
import { addFiguresComponent } from './addFigures/addFigures.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiguresComponent,
    StatisticsComponent,
    addFiguresComponent,
    
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
