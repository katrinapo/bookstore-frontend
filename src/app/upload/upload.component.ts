import { HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { s3 } from 'fine-uploader/lib/core/s3';
import { UploadImageServiceService } from '../services/upload-image-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  imageUrl: string = "/assets/img/default.jpg";
  fileToUpload : File = null;

  selectedFiles: FileList;

  constructor(private uServ : UploadImageServiceService)  {}

  ngOnInit(): void {
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uServ.uploadFile(file);

    
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

}
