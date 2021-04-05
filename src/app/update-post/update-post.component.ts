import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
interface Categorie {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  submitted= false;
  updatepostForm: FormGroup = new FormGroup({
    titre: new FormControl('',[Validators.required]),
    Description: new FormControl('',[Validators.required]),
    categorie: new FormControl('',[Validators.required]),
  })
  categories: Categorie[] = [
    {value: 'Sport', viewValue: 'Sport'},
    {value: 'Technologies', viewValue: 'Technologies'},
    {value: 'Economie', viewValue: 'Economie'},
    {value: 'Société', viewValue: 'Société'},
    {value: 'Culture', viewValue: 'Culture'}
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private snackbar: MatSnackBar) { }
    postId: any
    post:any;

  ngOnInit(): void {
    this.postId= this.route.snapshot.params['id']
    this.post = this.postService.getpostById(this.postId)
    this.updatepostForm=new FormGroup({
    titre: new FormControl('',[Validators.required]),
    Description: new FormControl('',[Validators.required]),
    categorie: new FormControl('',[Validators.required]),
    date: new FormControl(new Date()),
    id : new FormControl( Math.floor(Math.random()*100))

    });
    this.updatepostForm.patchValue(this.post)
  }
  updatePost(){
    this.submitted = true;
    if(this.updatepostForm.invalid){
      return;
    }
    this.postService.updatepostDataById(this.updatepostForm.value,this.postId)
    this.router.navigate(['list'])
    this.snackbar.open("Post updated successfully", "close",{
      duration:2000,
    })
  }

}
