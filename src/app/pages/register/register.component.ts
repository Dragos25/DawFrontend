import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private authService: AuthService, private router: Router) {}
  private baseUrl: string = environment.baseUrl;
  private publicHeaders = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  // public user: User = {
  //   username: '',
  //   email: '',
  //   password: '',
  //   firstName: '',
  //   lastName: '',
  //   token: '',
    
  // };

  

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  doRegister() {
    
    var data =this.myForm.getRawValue();
    let user: User = data;
    console.log(user);
   
    
    
      this.authService.register(user).subscribe((response: any) => {
        console.log(response);
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        }
      });
    
    
    }
    
}

