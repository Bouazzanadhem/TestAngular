import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor(private postService: PostService, private snackbar: MatSnackBar) { }
  Posts:any
  ngOnInit(): void {
    this.Posts = this.postService.getAllpost()
  }
  deletepost(i:number){
    this.postService.deletepostByIndex(i)
    this.ngOnInit()
    this.snackbar.open("Post deleted successfully", "close",{
      duration:2000,
    })
  }

}
