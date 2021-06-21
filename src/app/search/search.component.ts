import { Component,
   OnInit } from '@angular/core';
import { SearchService } from '../services/search/search.service'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    displays: any = [];
    keyword: string = "";
    
      constructor(private searchService: SearchService) {}
      ngOnInit(): void {
    
        this.load();
      }
      load(){
        this.displays = this.searchService.display;
        this.keyword = this.searchService.keyword;
        console.log(this.displays);
      }
    
   }

