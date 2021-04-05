import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
   // Add new post (used in add-post component)
   addpost(postData: any){
    let posts = JSON.parse(localStorage.getItem("posts") || '[]');
    posts.push(postData);
    localStorage.setItem("posts",JSON.stringify(posts));
   }
 
   //Get all post (used in list-post compnent)
   getAllpost(){
    return JSON.parse(localStorage.getItem("posts") || '[]');
   }
 
   //Get post by index (used in update-post component)
   getpostById(id:number){
    let Posts = JSON.parse(localStorage.getItem("posts") || '[]');
    let post = Posts.find((x:any)=>x.id == id);
    return post;
     
   }
 
   //Update post by index (used in update-post compoenent)
   updatepostDataById(updatpostData:any,id:number){
    let Posts =  JSON.parse(localStorage.getItem("posts") || '[]');
    let index=Posts.findIndex((x:any) => x.id == id);
    Posts.splice(index,1,updatpostData);
    localStorage.setItem("posts",JSON.stringify(Posts));
     
   }
 
   // Delete post by index (used in list-post component)
   deletepostByIndex(index:number){
    let posts= JSON.parse(localStorage.getItem("posts") || '[]');
    posts.splice(index,1);
    localStorage.setItem("posts",JSON.stringify(posts));
   }
}
