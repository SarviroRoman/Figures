import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Figure } from '../models/figure';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})

export class FigureService {

  private figuresUrl = 'api/figures';  // URL to web api

  constructor(
    private http: HttpClient
  ) {}

  /** GET figures from the server */
  getFigures (): Observable<Figure[]> {
    return this.http.get<Figure[]>(this.figuresUrl)
  }

  /** POST: add a new figure to the server */
  addFigure (figure: Figure): Observable<Figure> {
    return this.http.post<Figure>(this.figuresUrl, figure);
  }

   /** DELETE: delete the figure from the server */
   deleteFigure (figure: Figure | number): Observable<Figure> {
    const id = typeof figure === 'number' ? figure : figure.id;
    const url = `${this.figuresUrl}/${id}`;

    return this.http.delete<Figure>(url, httpOptions).pipe();

  }

}

