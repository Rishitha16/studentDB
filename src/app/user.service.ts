import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userData:Array<User> = [];
  constructor(private http:HttpClient) { }

  saveUser(user:User){
    console.log(user)
    return this.http.post(`https://6167d7e1ba841a001727c43f.mockapi.io/users/`, JSON.stringify(user), {headers: {
      'Content-Type': 'application/json'
    }})
  }
  
  getAllUser(){
    return this.http.get<Array<User>>(`https://6167d7e1ba841a001727c43f.mockapi.io/users`)
  }

  getUserByID(id:number){
    return this.http.get<User>(`https://6167d7e1ba841a001727c43f.mockapi.io/api/users/${id}`)
  }

  updateUserById(userId:number,userdata:User){
    return this.http.put(`https://6167d7e1ba841a001727c43f.mockapi.io/users/${userId}`,userdata)
  }

  deleteUserById(id:number){
    return this.http.delete(`https://6167d7e1ba841a001727c43f.mockapi.io/users/${id}`)
  }

}
