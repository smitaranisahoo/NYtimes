import { Component, OnInit } from '@angular/core';
import { OpinionService } from '../services/opinion/opinion.service';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
opinions: any;
  constructor( private opinionservice: OpinionService  ) { }

  ngOnInit(): void {
    this.opinionservice.getopiniondata().subscribe(data =>{
      console.log(data.results);
      // this.list = data.hits[0].recipe;
      this.opinions = data.results;
    
    });
  }

}
