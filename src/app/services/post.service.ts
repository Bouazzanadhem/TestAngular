import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
   // Add new post (used in add-contact component)
   addpost(postData: any){
    let posts = JSON.parse(localStorage.getItem("posts") || '[]');
    posts.push(postData);
    localStorage.setItem("posts",JSON.stringify(posts));
   }
 
   //Get all post (used in dashbord compnent)
   getAllpost(){
    return JSON.parse(localStorage.getItem("posts") || '[]');
   }
 
   //Get post by index (used in update-contact component)
   getpostById(id:number){
     
   }
 
   //Update post by index (used in update-contact compoenent)
   updatepostDataById(updatuserData:any,id:number){
     
   }
 
   // Delete post by index (used in dashbord component)
   deletepostByIndex(index:number){
    let posts= JSON.parse(localStorage.getItem("posts") || '[]');
    posts.splice(index,1);
    localStorage.setItem("posts",JSON.stringify(posts));
   }
}
