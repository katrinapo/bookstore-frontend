import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Book } from '../bookinventory/book';
import { BookService } from '../services/book.service';

=======
import { Book } from '../book';
import { BookService } from '../services/book.service';
>>>>>>> bcb1048587f5cd0553974feb9e9a6edf206dd31a
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
<<<<<<< HEAD
  bookList: Book[];
  constructor(private bookServ: BookService) { }
=======

  bookList: Book[];
>>>>>>> bcb1048587f5cd0553974feb9e9a6edf206dd31a

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
