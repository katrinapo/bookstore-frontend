import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CustomernavComponent } from './customernav/customernav.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { EmployeenavComponent } from './employeenav/employeenav.component';
import { BookInventoryComponent } from './bookinventory/bookinventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './booklist/booklist.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerhomeComponent,
    CustomernavComponent,
    EmployeehomeComponent,
    EmployeenavComponent,
    BookInventoryComponent,
    BooklistComponent,
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'app', component: AppComponent},
      {path: 'customerhome',component: CustomerhomeComponent},
      {path: 'employeehome',component: EmployeehomeComponent},
      {path: 'bookinventory',component: BookInventoryComponent},
      {path: 'booklist',component: BooklistComponent}
    ])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
