import { Component, OnInit } from '@angular/core';
import { PrivateService } from 'src/app/services/private.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public users: User[];
  public text: string = 'CEVA';
  public searchText: string = '';
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.users);
  }

  getAllUsers() {
    this.userService.getAll().subscribe((response: any) => {
      console.log(response);
      this.users = response;
    });
  }

  deleteUser(firstName: string) {
    this.users = this.users.filter((user) => {
      return user.firstName !== firstName;
    });
  }
}
