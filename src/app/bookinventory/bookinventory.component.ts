import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from './book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-bookinventory',
  templateUrl: './bookinventory.component.html',
  styleUrls: ['./bookinventory.component.css']
})
export class BookInventoryComponent implements OnInit {

  bookList: Book[];

  bookGroup =  new FormGroup({
    //bookId: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    genre: new FormControl(''),
    cost: new FormControl(''),
    quantity: new FormControl('')
  });

  constructor(private bookServ: BookService) { }

  ngOnInit(): void {
    this.bookServ.  getAllBooks().subscribe(
      response => {
        console.log(response);
        this.bookList=response;
      }
    )
  }

  public submitBook(book: FormGroup) {
    console.log('button clicked');
    console.log(book);
    let stringBook = JSON.stringify(book.value);
    this.bookServ.postBook(stringBook).subscribe(
      response => {
        console.log(response);
        this.bookList.push(response);
      }
    )
  }
}
