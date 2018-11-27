import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [PostService]
})
export class AppComponent implements OnInit {
  	public posts: any;

  	constructor (private postService: PostService) {

  	}

 	ngOnInit() {
 		this.getPosts();
 	}

  	getPosts(){
  		this.postService.fetchPosts().subscribe(data => {
  			
  			this.posts = data;
  			
  		});
  	}
}