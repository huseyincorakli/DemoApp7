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
import { EmployeesComponent } from './pages/employees/employees.component';
import { canActivateChildGuard, canActivateGuard, canDeactivateGuard, loggedSuccesfull, resolveGuard } from './guards/guards';
import { PostsComponent } from './pages/posts/posts.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'goto-about/okkk/about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsComponent },
  {path:'customers', component:CustomersComponent,
  canActivate:[canActivateGuard],
    children:[
      {path:'customer-detail/:id',component:CustomerDetailComponent ,
      canActivateChild:[canActivateChildGuard],
        children: [
          {path:'',redirectTo:'customer-orders',pathMatch:'full'},
          {path:'customer-orders',component:CustomerOrdersComponent},
          {path:'customer-comments',component:CustomerCommentsComponent},
        ]
      }
    ]
  },
  {path:'employees',component:EmployeesComponent, canDeactivate:[canDeactivateGuard]},
  {path:'posts',component:PostsComponent,resolve:{posts:resolveGuard}},
  {path:'profile',component:ProfileComponent,canMatch:[loggedSuccesfull]},
  {path:'profile',component:UnauthorizedComponent},
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
