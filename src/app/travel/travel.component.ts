import { Component, OnInit } from '@angular/core';
import {TravelService} from '../services/travel/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {


  travels: any;
    constructor(private travelService : TravelService) { }
  
    ngOnInit(): void {
      this.travelService.gettravel().subscribe((data: { results: any; }) =>{
        console.log(data.results);
        this.travels = data.results;
      
      });
    }
  
}
