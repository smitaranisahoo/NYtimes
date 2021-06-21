import { Component, OnInit } from '@angular/core';
import {NyService} from '../services/ny/ny.service';

@Component({
  selector: 'app-n.y.',
  templateUrl: './n.y..component.html',
  styleUrls: ['./n.y..component.css']
})
export class NYComponent implements OnInit {
  data: any;
  nys: any;
    constructor(private nyService: NyService) { }
  
    ngOnInit(): void {
      this.nyService.getny().subscribe((data: { results: any; }) =>{
        console.log(data.results);
        // this.list = data.hits[0].recipe;
        this.nys = data.results;
      
      
      
    });
    }

}
