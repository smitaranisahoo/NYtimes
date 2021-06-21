import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotsService {
  constructor(private http: HttpClient) { }
  getspots(): Observable<any> {
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=X5lqGGa2jS82kMMMChho9TaL8YWR1uPl")
}
}
