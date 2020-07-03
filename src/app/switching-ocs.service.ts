import { Injectable } from '@angular/core';
import { oc } from './oc';
import { HttpClient, HttpRequest,HttpEvent, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject,throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const _url: string = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root'
})
export class SwitchingOcsService {
  
  
 
  constructor(private http : HttpClient, private router:Router ) { }

  getAll(){
    let header = new HttpHeaders();
    header.append('Access-Control-Allow-Origin','*');
  }

 getOcs(): Observable<oc[]>{
  return this.http
  .get(_url + '/Characters').pipe(map((response:any) => {
    const oc = response;
    console.log(oc);
    return oc;
  }))
  
  }

  getOc(id): Observable<oc>{
    return this.http.get<oc>(`${_url}/Character/${id}`).pipe(
      catchError(e => {
      if(e.status != 401 && e.error.message){
      return throwError(e);
      }
      if(e.error.message){
        this.router.navigate(['/Characters']);
        console.error(e.error.message);
      }
        return throwError(e);
      })
    );
  }

  public getTodoById(id): Observable<oc> {
    return this.http
      .get<oc>(_url + '/Character/' + id).pipe(
      map((response => {
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
