import { Component, OnInit } from '@angular/core';
import {UsService} from '../services/us/us.service';

@Component({
  selector: 'app-u.s',
  templateUrl: './u.s.component.html',
  styleUrls: ['./u.s.component.css']
})
export class USComponent implements OnInit {


  uss: any;

    constructor(private usService :UsService ) { }
  
    ngOnInit(): void {
      this.usService.getus().subscribe((data: { results: any; }) =>{
        console.log(data.results);
        this.uss = data.results;
      
      });
    }

}
