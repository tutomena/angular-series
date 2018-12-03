import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routing';
import { SingleBlogComponent } from './single-blog/single-blog.component';  

@NgModule({
  declarations: [ 
    AppComponent,
    BlogComponent,
    HomeComponent,
    SingleBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
