import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetconfService {

  baseUrl = "http://172.18.50.136:8181/onos/netconfapi/data";

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  sendRPC(deviceId: string, xmlData: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/${deviceId}`, xmlData).pipe(
      tap(_ => console.log(`send request to ${this.baseUrl}/${deviceId}`)),
      catchError(this.handleError<string>('failed to sendRPC'))
    );
  }

  getCapability(deviceId: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/${deviceId}`).pipe(
      tap(_ => console.log(`get capability from ${deviceId}`)),
      catchError(this.handleError<string>('failed to get capability'))
    )
  }
}
