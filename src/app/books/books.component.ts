import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  data: any;
  books: any;
    constructor(private booksService: BooksService) { }
  
    ngOnInit(): void {
      this.booksService.getbook().subscribe((data: { results: any; }) =>{
        console.log(data.results);
        // this.list = data.hits[0].recipe;
        this.books = data.results;
      
      
      
    });
    }

}
