import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  	public post: any;

  	constructor (private postService: PostService,
  				 private route:ActivatedRoute) { }

 	ngOnInit() {
 		let id = this.route.snapshot.params['id'];
 		this.getPost(id).subscribe(data => {
			this.post = data;
		});;
 	}

	getPost(id: number){
		return this.postService.fetchPostById(id);
	}

}
