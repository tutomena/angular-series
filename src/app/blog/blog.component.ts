import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

	public posts: any;

  	constructor (private postService: PostService) { }

 	ngOnInit() {
 		this.getPosts();
 	}

	getPosts(){
		this.postService.fetchPosts().subscribe(data => {
			this.posts = data;
		});
	}

}
