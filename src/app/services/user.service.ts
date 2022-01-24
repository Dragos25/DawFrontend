import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;
  private Headers ={
    headers: new HttpHeaders({
      'content-type': 'application/json'
      
    }),
  };
  

  private HeadersWithAuth = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      Authorization: "Bearer " + localStorage.getItem("token")
    }),
  };

  
  constructor(private http: HttpClient) { }

  getAll(){
    console.log(localStorage.getItem("token"));
    return this.http.get(this.baseUrl + 'User/GetAll', this.HeadersWithAuth);

  }

  getUserById(id: any){
    
    return this.http.get(this.baseUrl + 'User/GetById/' + id, this.HeadersWithAuth);

  }
}
