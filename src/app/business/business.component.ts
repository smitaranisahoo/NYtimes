import { Component, OnInit } from '@angular/core';
import {BusinessService} from '../services/business/business.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
business : any;
  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.getbusiness().subscribe(data =>{
      console.log(data.results);
      this.business = data.results;
    
    });
  }

}
