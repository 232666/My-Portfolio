import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from './portfolio';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private portfoliosUrl = 'api/portfolios';

  constructor(private http:HttpClient) { }

  getPortfolios():Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(this.portfoliosUrl)
      .pipe(
        tap(_ => console.log("Feteched Portfolios")),
        catchError(this.handleError<Portfolio[]>('getPortfolio', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      window.alert(`${operation} failed: $error.message`);
      return of(result as T);
    };
  }
}
