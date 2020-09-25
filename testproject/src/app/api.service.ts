import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient:HttpClient) { }

  registerUser(objUser:User):Observable<User>{
    return this.httpclient.post<User>
    ("http://localhost:3000/users",{
      "userId":objUser.userId,
      "firstName":objUser.firstName,
      "lastName":objUser.lastName,
      "email":objUser.email,
      "phoneNumber":objUser.phoneNumber,
      "age":objUser.age,
      "state":objUser.state,
      "country":objUser.country,
      "address":objUser.address
    })
  }
  
  editUser(objUser:User):Observable<User> {
    return this.httpclient.put<User>
    ("http://localhost:3000/users/"+objUser.userId,{
      "firstName":objUser.firstName,
      "lastName":objUser.lastName,
      "email":objUser.email,
      "phoneNumber":objUser.phoneNumber,
      "age":objUser.age,
      "state":objUser.state,
      "country":objUser.country,
      "address":objUser.address
    })
  }

  getUser(userId):Observable<User[]>
  {
    return this.httpclient.get<User[]>("http://localhost:3000/users?userId="+userId);
  }

  uploadFile(file):Observable<any> {
    return this.httpclient.post<any>("http://localhost:3000/upload", file);
  }
  
}
