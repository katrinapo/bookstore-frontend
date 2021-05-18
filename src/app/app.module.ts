import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CustomernavComponent } from './customernav/customernav.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { EmployeenavComponent } from './employeenav/employeenav.component';
import { BookInventoryComponent } from './bookinventory/bookinventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EnteremailComponent } from './enteremail/enteremail.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';

import { CheckoutComponent } from './checkout/checkout.component';
import { UploadComponent } from './upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    CustomerhomeComponent,
    CustomernavComponent,
    EmployeehomeComponent,
    EmployeenavComponent,
    BookInventoryComponent,
    BooklistComponent,
    OrdersComponent,

    LoginComponent,
    RegistrationComponent,
    EnteremailComponent,
    CreatepasswordComponent,
    CheckoutComponent,
    UploadComponent,

  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'app', component: AppComponent},
      {path: 'booklist', component: BooklistComponent},
      {path: 'customerhome',component: CustomerhomeComponent},
      {path: 'employeehome',component: EmployeehomeComponent},
      {path: 'bookinventory',component: BookInventoryComponent},
      {path: 'orderList',component: OrdersComponent},
      {path: 'orderList',component: OrdersComponent},
      {path: 'registration',component: RegistrationComponent},
      {path: '',component:LoginComponent},
      {path: 'login',component:LoginComponent},
      {path:'enteremail',component:EnteremailComponent},
      {path:'createpassword', component:CreatepasswordComponent},
      {path:'checkout',component:CheckoutComponent},
      {path:'upload',component:UploadComponent}
    ])

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
