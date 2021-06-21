import { Component, OnInit } from '@angular/core';
import {SpotsService} from '../services/spots/spots.service';
@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit {

  spots: any;
  constructor( private spotsService : SpotsService  ) { }

  ngOnInit(): void {
    this.spotsService.getspots().subscribe((data: { results: any; }) =>{
      console.log(data.results);
      // this.list = data.hits[0].recipe;
      this.spots = data.results;
    
    });
  }
}
