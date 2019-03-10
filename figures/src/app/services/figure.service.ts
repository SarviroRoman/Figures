import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, from } from 'rxjs';

import { Figure } from '../models/figure';
import { APP } from '../application-constants';
import { ResponseMessage } from '../models/response-message.mode';

@Injectable({
  providedIn: 'root'
})

export class FigureService {

  constructor(
    private http: HttpClient
  ) {}

  getFigures (): Observable<Figure[]> {
    return this.http.get<Figure[]>(`${APP.endpoints.baseUrl}${APP.endpoints.figures}`);
  }

  // addFigure (figure: Figure): Observable<Figure> {
  //   return this.http.post<Figure>(this.figuresUrl, figure);
  // }

   deleteFigure (figureId: number): Observable<ResponseMessage> {
    return this.http.delete<ResponseMessage>(`${APP.endpoints.baseUrl}${APP.endpoints.figures}?id=${figureId}`);
  }

}

