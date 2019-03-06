import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { HeaderComponent } from './header/header.component';
import { FiguresComponent } from './figures/figures.component';
import { AppRoutingModule } from './app-routing-module';
import { StatisticsComponent } from './statistics/statistics.component';
import { AddFiguresComponent } from './add-figures/add-figures.component';
import { CircleComponent } from './circle/circle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { TriangleComponent } from './triangle/triangle.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiguresComponent,
    StatisticsComponent,
    AddFiguresComponent,
    CircleComponent,
    SquareComponent,
    RectangleComponent,
    TriangleComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
