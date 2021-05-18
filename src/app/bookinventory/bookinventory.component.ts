import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { Book } from '../book';
import { NotificationService } from '../notification.service';
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
    image: new FormControl('')
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

  
  bookToAddImage = {
    image: "",
    title: "",
  }
  constructor(private bookServ: BookService, private uServ : UploadImageServiceService, private nServ : NotificationService) { }
  imageUrl: string = "/assets/img/default.jpg";
  fileToUpload : File = null;

  selectedFiles: FileList;
  ngOnInit(): void {
    this.bookServ.  getAllBooks().subscribe(
      response => {
        console.log(response);
        this.bookList=response;
      }
    )

  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uServ.uploadFile(file);
    this.showToasterSuccess();
    this.onCloseHandled();
  }

  save() {
    const file = this.selectedFiles.item(0);
    this.bookToAddImage.image = "https://bookimagesbucket.s3.us-east-2.amazonaws.com/" + file.name;
    this.uServ.addImageToBook(this.bookToAddImage).subscribe()
  }
 
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
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

  public edit(book) {
    this.bookToUpdate = book;
  }

  public selectBook(book) {
    this.bookToAddImage = book;
  }
 
showToasterSuccess(){
    this.nServ.showSuccess("Data shown successfully !!", "http://localhost:4200/")
}

showToasterError(){
    this.nServ.showError("Something is wrong", "http://localhost:4200/")
}
  
}