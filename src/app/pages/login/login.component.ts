import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy {
  public text: string = '';
  public isDisabled: boolean = false;
  public emailAndPass: string = '';
  public user: User = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    token: '',
    
  };
  public error: boolean | string = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.text = 'TEST';
  }

  doLogin(): void {
    this.error = false;
    console.log('LOGIN CLICKED', this.user);
      this.authService.login(this.user).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        console.log(localStorage.getItem('token'));
        if (response && response.token) {
          
          this.router.navigate(['/dashboard']);
        }
      });
    
  }

  validateEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  ngOnChanges() {}
  ngOnDestroy() {}
}
