import { Injectable } from '@angular/core';
import { oc } from './oc';
import { HttpClient, HttpRequest,HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject,throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const _url = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class SwitchingOcsService {
  
  
 
  constructor(private http : HttpClient, private router:Router ) { }

 getOcs(): Observable<oc[]>{
  return this.http
  .get(_url + '/characters').pipe(map((response:any) => {
    const oc = response;
    return oc;
  }))
  
  }

  getOc(id): Observable<oc>{
    return this.http.get<oc>(`${_url}/characters/${id}`).pipe(
      catchError(e => {
      if(e.status != 401 && e.error.message){
      return throwError(e);
      }
      if(e.error.message){
        this.router.navigate(['/characters']);
        console.error(e.error.message);
      }
        return throwError(e);
      })
    );
  }

  public getTodoById(id): Observable<oc> {
    return this.http
      .get<oc>(_url + '/characters/' + id).pipe(
      map((response => {
        let c = response
        return response;
      })))
    }
}
// Cliente(id): Observable<Cliente>{
//   return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
//     catchError(e => {
//     if(e.status != 401 && e.error.message){
//     return throwError(e);
//     }
//     if(e.error.message){
//       this.router.navigate(['/clientes']);
//       console.error(e.error.message);
//     }
//       return throwError(e);
//     })
//   );
// }
