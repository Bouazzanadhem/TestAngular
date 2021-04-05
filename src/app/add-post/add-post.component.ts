import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

interface Categorie {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  submitted = false;
  addpostForm:FormGroup = new FormGroup({
    titre: new FormControl('',[Validators.required]),
    Description: new FormControl('',[Validators.required]),
    categorie: new FormControl('',[Validators.required]),
    date: new FormControl(new Date()),
    id : new FormControl( Math.floor(Math.random()*100))
  })
  categories: Categorie[] = [
    {value: 'Sport', viewValue: 'Sport'},
    {value: 'Technologies', viewValue: 'Technologies'},
    {value: 'Economie', viewValue: 'Economie'},
    {value: 'Société', viewValue: 'Société'},
    {value: 'Culture', viewValue: 'Culture'}
  ];
  

  constructor(
    private postSerive : PostService,
    private route:Router,
    private snackbar: MatSnackBar
     ) { }

  ngOnInit(): void {

  }
  addPost(){
    this.submitted= true;
    if (this.addpostForm.invalid){
      return;
    }
    this.postSerive.addpost(this.addpostForm.value)
    this.route.navigate(['list'])
    this.snackbar.open("Post added successfully", "close",{
      duration:2000,
    })
  }

}
