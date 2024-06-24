import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaziente } from '../models/IPaziente';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {

  private readonly BaseUrl = 'https://kgfek5e9a0.execute-api.us-east-1.amazonaws.com'


  constructor(private http: HttpClient) { }

  public get(url: string): Observable<IPaziente[]>{
    return this.http.get<IPaziente[]>(this.BaseUrl + url);
  }

  public post(url: string, body: Omit<IPaziente,"id">): Observable<IPaziente[]>{
    return this.http.post<IPaziente[]>(this.BaseUrl + url, body);
  }

  public put(url: string, body: IPaziente): Observable<IPaziente[]>{
    return this.http.put<IPaziente[]>(this.BaseUrl + url, body);
  }

  public delete(url: string): Observable<number>{
    return this.http.delete<number>(this.BaseUrl + url);
  } 
}
