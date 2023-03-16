import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibararyComponent } from './libarary/libarary.component';
import{LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ReturnBookComponent } from './return-book/return-book.component';

const routes: Routes = [
  
  {
  path: "books/libarary",
  component :  LibararyComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'users/order',
    component: OrderComponent,
  },
  {
    path: 'users/all-orders',
    component: OrdersComponent,
  },
  {
    path: 'books/return',
    component: ReturnBookComponent,
  },
  {
    path: 'users/list',
    component: UsersListComponent,
  },
  {
    path: 'books/maintenance',
    component: ManageBooksComponent,
  },
  {
    path: 'books/categories',
    component: ManageCategoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
