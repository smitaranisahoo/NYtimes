import { Component, OnInit } from '@angular/core';
import {TechService} from '../services/tech/tech.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
techs: any;
data: any;
  constructor(private techService : TechService) { }

  ngOnInit(): void {
    this.techService.gettech().subscribe((data: { results: any; }) =>{
      console.log(data.results);
      this.techs = data.results;
    
    });
  }

}
