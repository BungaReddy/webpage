import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public baseUrl: string = "https://qa-api.startasker.com";
  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    return this.http.post(this.baseUrl + "/api/customer/login", data);
 }
 signup(data:any): Observable<any>{
  return this.http.post(this.baseUrl + "/api/customer/register", data);
 }


}
