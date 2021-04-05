import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor(private postService: PostService) { }
  Posts:any
  ngOnInit(): void {
    this.Posts = this.postService.getAllpost()
  }
  deletepost(i:number){
    this.postService.deletepostByIndex(i)
    this.ngOnInit()
  }

}
