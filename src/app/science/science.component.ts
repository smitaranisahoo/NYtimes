import { Component, OnInit } from '@angular/core';
import {ScienceService} from '../services/science/science.service'

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  data: any;
  sciences: any;
    constructor(private scienceService: ScienceService) { }
  
    ngOnInit(): void {
      this.scienceService.getscience().subscribe((data: { results: any; }) =>{
        console.log(data.results);
        // this.list = data.hits[0].recipe;
        this.sciences = data.results;
      
      
      
    });
    }
}
