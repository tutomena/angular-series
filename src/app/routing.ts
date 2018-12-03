import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component'; 
import { SingleBlogComponent } from './single-blog/single-blog.component'; 


import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: SingleBlogComponent },
  { path: '', component: HomeComponent }
];
