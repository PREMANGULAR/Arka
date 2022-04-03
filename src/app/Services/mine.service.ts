import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MineService {
  private _data:boolean = true;
  sharingData = new  Subject();

  private _items: number = 0;
  SharingData = new Subject()

  constructor(private http:HttpClient) { }

  Afunction(data:boolean){
    this._data = false;
    this.sharingData.next(this._data)
  }

  ParentFunction():boolean{
    return this._data;
    
  }

  getAllUsers(){
   return this.http.get("https://jsonplaceholder.typicode.com/users");
    
  }
   
   getUser(id:number){
     return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);

   }
   getPost(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");

  }
    /*addItem() {
        this._items += 1;
        this.SharingData.next(this._items);

    }
    
    removeItem() {
        this._items -= 1;
        this.SharingData.next(this._items);

    }
   getItemCount(): number {
        return this._items;
        
    }*/
     
     
}
