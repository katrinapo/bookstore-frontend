import { Component, OnInit } from '@angular/core';
import { Book } from '../bookinventory/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  bookList: Book[];
  constructor(private bookServ: BookService) { }

  ngOnInit(): void {
    this.bookServ.getAllBooks().subscribe(
      response => {
        console.log(response);
        this.bookList=response;
      }
    )
  }

}
