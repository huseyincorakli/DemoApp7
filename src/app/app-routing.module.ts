import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { CustomerOrdersComponent } from './pages/customer-orders/customer-orders.component';
import { CustomerCommentsComponent } from './pages/customer-comments/customer-comments.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'goto-about/okkk/about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsComponent },
  {path:'customers', component:CustomersComponent,
    children:[
      {path:'customer-detail/:id',component:CustomerDetailComponent ,
        children: [
          {path:'',redirectTo:'customer-orders',pathMatch:'full'},
          {path:'customer-orders',component:CustomerOrdersComponent},
          {path:'customer-comments',component:CustomerCommentsComponent},
        ]
      }
    ]
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
