import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
key: string = ""
  constructor(private route: Router, private searchservice: SearchService) { }

  ngOnInit(): void {
  }

  logout(){
    window.localStorage.removeItem("authtoken");
    this.route.navigate([''])
  }
  news(): void{
  this.searchservice.fetchResultByKey(this.key);
  }

}
