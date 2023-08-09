import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getNews(query: string): Observable<any> {
    return this.http.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=33a4b99fe079413bbb60e9df50e4f11b`
    );
  }
}
