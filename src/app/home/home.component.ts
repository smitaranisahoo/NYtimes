import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  homes: any;
    constructor(private homeService: HomeService) { }
  
    ngOnInit(): void {
      this.homeService.gethome().subscribe((data: { results: any; }) =>{
        console.log(data.results);
    
        this.homes = data.results;
      
      
      
    });
    }

}
