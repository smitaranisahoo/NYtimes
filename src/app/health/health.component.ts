import { Component, OnInit } from '@angular/core';
import {HealthService} from '../services/health/health.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  data: any;
  healths: any;
    constructor(private healthService : HealthService) { }
  
    ngOnInit(): void {
      this.healthService.gethealth().subscribe((data: { results: any; }) =>{
        console.log(data.results);
        // this.list = data.hits[0].recipe;
        this.healths = data.results;
      
      
      
    });
    }


}
