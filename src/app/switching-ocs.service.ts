import { Injectable } from '@angular/core';
import { oc } from './oc';
import { HttpClient, HttpRequest,HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject,throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwitchingOcsService {
  
  private _url = 'http://localhost:3000';
 
  constructor(private http : HttpClient, private router:Router ) { }

 getOcs(): Observable<oc[]>{
    return this.http.get<oc[]>(this._url);
  }

  getOc(id): Observable<any>{
    return this.http.get<oc>(`${this._url}/${id}`).pipe(
      catchError(e => {
      if(e.status != 401 && e.error.message){
      return throwError(e);
      }
      if(e.error.message){
        this.router.navigate(['/clientes']);
        console.error(e.error.message);
      }
        return throwError(e);
      })
    );
  }
}

