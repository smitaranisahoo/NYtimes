import { Component, OnInit } from '@angular/core';
import { TopStoriesService } from '../services/top-stories.service'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
data: any;
items: any;
  constructor(private topStoriesservice: TopStoriesService) { }

  ngOnInit(): void {
    this.topStoriesservice.getworlddata().subscribe(data =>{
      console.log(data.results);
      // this.list = data.hits[0].recipe;
      this.items = data.results;
    
    
    
  });
  }
}