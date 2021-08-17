import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderIndexService {

  headers:string[] = ["Main", "Projects"];
  iconLink:string = "assets/images/lupa.png";
  readMoreImage:string = "assets/images/play.png";
  arrowImage:string = "assets/images/down-arrow.png";

  constructor() { }

  getHeaders(): Observable<string[]>{
    return of(this.headers);
  }

  getIconLink(): Observable<string>{
    return of(this.iconLink);
  }

  getReadMoreImage(): Observable<string>{
    return of(this.readMoreImage);
  }

  getArrowImage(): Observable<string>{
    return of(this.arrowImage);
  }
}
