import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../services/book.service';
import { UploadImageServiceService } from '../services/upload-image-service.service';

@Component({
  selector: 'app-bookinventory',
  templateUrl: './bookinventory.component.html',
  styleUrls: ['./bookinventory.component.css']
})

export class BookInventoryComponent implements OnInit {

  bookList: Book[];

  bookGroup =  new FormGroup({
    
    title: new FormControl(''),
    author: new FormControl(''),
    genre: new FormControl(''),
    cost: new FormControl(''),
    quantity: new FormControl('')
  });


  updateGroup =  new FormGroup({
    
    title: new FormControl(''),
    author: new FormControl(''),
    genre: new FormControl(''),
    cost: new FormControl(''),
    quantity: new FormControl(''),

  });

  imageGroup = new FormGroup({
    title: new FormControl(''),
    file: new FormControl('')
  })

  display = "none";
  display1 = "none";
  bookToUpdate = {
    title:"",
    author:"",
    genre:"",
    cost:"",
    quantity:"",
 
  }

  file: File = null;
  bookToAddImage = {
    title: "",
    image: this.file
  }
  constructor(private bookServ: BookService, private uServ : UploadImageServiceService) { }

  ngOnInit(): void {
    this.bookServ.  getAllBooks().subscribe(
      response => {
        console.log(response);
        this.bookList=response;
      }
    )

  }

  openImageModal(book) {
    this.display1 = "block";
    this.selectBook(book);
  }

  closeImageModal(){
    this.display1 = "none";
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  openEditModal(book) {
    this.openModal();
    this.edit(book);
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
    this.bookGroup.reset();
  }

  public updateBook() {
    this.bookServ.updateBook(this.bookToUpdate).subscribe(
      response => {
        console.log(response);
      }
    )
    alert("updated succesfully!");
    this.onCloseHandled();
  }

  public uploadImage() {
    console.log("upload clicked");
    this.uServ.pushFileToStorage( this.bookToAddImage.title, this.bookToAddImage.image).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  public edit(book) {
    this.bookToUpdate = book;
  }

  public selectBook(book) {
    this.bookToAddImage = book;
  }
 
  upload(event: Event) {
      const target = event.target as HTMLInputElement;
      const files = target.files[0];
      console.log(files);
  }

  upload2(file)
 { console.log('file'+':'+file.value) 
   const inputNode = file.value.replace("C:\\fakepath\\", "");
   console.log(inputNode);
 }
}