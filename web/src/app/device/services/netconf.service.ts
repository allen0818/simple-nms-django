import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetconfService {

  // baseUrl = "http://172.18.50.136:8181/onos/netconfapi/data";
  baseUrl = "/onos-api/onos/netconfapi";

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  private getOnosHttpOptions() {

    const options: any = {
      headers: new HttpHeaders({
        'Authorization': "Basic " + btoa("onos:rocks")
      }),
      responseType: 'text' as 'text',
      // observe: 'body'
    }

    return options;
  }

  sendRPC(deviceId: string, data: object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/data/${deviceId}`, data, this.getOnosHttpOptions()).pipe(
      tap(_ => console.log(`send request to ${this.baseUrl}/${deviceId}`)),
      catchError(this.handleError<string>('failed to sendRPC'))
    );
  }

  getCapability(deviceId: string): Observable<any> {
    const httpOptions = this.getOnosHttpOptions();
    console.log('httpOptions', httpOptions);

    return this.http.get<any>(`${this.baseUrl}/capabilities/${deviceId}`, httpOptions).pipe(
      tap(_ => console.log(`get capability from ${deviceId}`)),
      catchError(this.handleError<any>('failed to get capability'))
    )
  }
}
