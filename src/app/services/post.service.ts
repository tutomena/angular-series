import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

	constructor(private HttpClient:HttpClient) { }

	fetchPosts(){
	  	return this.HttpClient.get("https://jsonplaceholder.typicode.com/posts");
	}

}
