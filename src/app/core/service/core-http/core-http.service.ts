import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {

  private BaseUrl = 'https://api.example.com'

  constructor(private http: HttpClient) { }

  public get<T = unknown>(url: string): Observable<T>{
    return this.http.get<T>(this.BaseUrl + url);
  }
}
