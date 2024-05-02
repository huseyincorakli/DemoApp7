import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { CustomerOrdersComponent } from './pages/customer-orders/customer-orders.component';
import { CustomerCommentsComponent } from './pages/customer-comments/customer-comments.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CalculateComponent } from './pages/calculate/calculate.component'
// import {routes} from './routes/routes'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    ProductsComponent,
    CustomersComponent,
    CustomerDetailComponent,
    CustomerOrdersComponent,
    CustomerCommentsComponent,
    EmployeesComponent,
    PostsComponent,
    UnauthorizedComponent,
    ProfileComponent,
    CalculateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // RouterModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
