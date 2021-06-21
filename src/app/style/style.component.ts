import { Component, OnInit } from '@angular/core';
import {StyleService} from '../services/style/style.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  
  styles: any;
    constructor(private styleService : StyleService) { }
  
    ngOnInit(): void {
      this.styleService.getstyle().subscribe((data: { results: any; }) =>{
        console.log(data.results);
        this.styles = data.results;
      
      });
    }
  

}
