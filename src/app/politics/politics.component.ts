import { Component, OnInit } from '@angular/core';
import {PoliticsService} from '../services/politics/politics.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

  politics: any;
  constructor( private politicsService: PoliticsService  ) { }

  ngOnInit(): void {
    this.politicsService.getpolitics().subscribe(data =>{
      console.log(data.results);
      // this.list = data.hits[0].recipe;
      this.politics = data.results;
    
    });
  }
}
