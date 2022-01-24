import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private publicHeaders = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}


  register(data: User){
     
    const body= JSON.stringify(data);
    console.log(body);
    return this.http.post(
      this.baseUrl + 'User/Create',
      body,
      this.publicHeaders,
      
      
      
    );
  }
  login(data: User) {
    var response = 'text';
    var json ={
      username: data.username,
      password: data.password
    };
    const body= JSON.stringify(json);
    console.log(body);
    return this.http.post(
      this.baseUrl + 'User/Login',
      body,
      this.publicHeaders,
      
      
      
    );
  }
}
