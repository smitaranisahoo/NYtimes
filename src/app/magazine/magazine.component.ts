import { Component, OnInit } from '@angular/core';
import {MagazineService} from '../services/magazine/magazine.service';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  data: any;
  magazines: any;
    constructor(private magazineService: MagazineService) { }
  
    ngOnInit(): void {
      this.magazineService.getmagazine().subscribe((data: { results: any; }) =>{
        console.log(data.results);
        // this.list = data.hits[0].recipe;
        this.magazines = data.results;
      
      
      
    });
    }

}
