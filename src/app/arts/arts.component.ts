import { Component, OnInit } from '@angular/core';
import {ArtService } from '../services/arts/art.service';
@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {
arts: any;
  constructor(private artservice: ArtService) { }

  ngOnInit(): void {
    this.artservice.getartdata().subscribe(data =>{
      console.log(data.results);
      // this.list = data.hits[0].recipe;
      this.arts = data.results;
    
    })
  }

}
