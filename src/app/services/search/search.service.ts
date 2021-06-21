import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';

import { Observable, observable, of } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // public baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json&api-key=X5lqGGa2jS82kMMMChho9TaL8YWR1uPl";
  public searchResults: any;
  // constructor(private httpClient: HttpClient, private route:Router) { }
//   keyword: string ="";
  fetchnew = "";
  intfetch:Observable<any> | undefined
  display:any = []
  keyword: string = "";
  constructor(private http: HttpClient, private route:Router) { }

fetchResultByKey(key: any): void{
  this.keyword = key;
  console.log(key);
  this.fetchnew = (`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${key}&api-key=X5lqGGa2jS82kMMMChho9TaL8YWR1uPl`)
  this.intfetch = this.http.get(this.fetchnew);
  this.intfetch.subscribe((result)=>{
    console.log(result);
    this.display = result.response.docs;
    console.log(this.display)
    this.route.navigate(["search"])
  })

}}