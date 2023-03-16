import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import {PageFooterComponent} from './page-footer/page-footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LibararyComponent } from './libarary/libarary.component';
import { RouterModule ,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ReturnBookComponent } from './return-book/return-book.component';
@NgModule({
  declarations: [
   AppComponent,
   PageHeaderComponent,
   PageFooterComponent,
   SideNavComponent,
   LibararyComponent,
   LoginComponent,
   RegisterComponent,
   OrderComponent,
   OrdersComponent,
   UsersListComponent,
   ManageBooksComponent,
   ManageCategoriesComponent,
   ReturnBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
