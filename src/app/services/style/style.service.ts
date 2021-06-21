import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  constructor(private http: HttpClient) { }
  getstyle(): Observable<any> {
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/style.json?api-key=X5lqGGa2jS82kMMMChho9TaL8YWR1uPl")
}
}
