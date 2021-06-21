import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class TopStoriesService {
  constructor(private http: HttpClient) { }
  getworlddata(): Observable<any> {
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=X5lqGGa2jS82kMMMChho9TaL8YWR1uPl")
}
}
