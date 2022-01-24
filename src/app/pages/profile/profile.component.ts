import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../interfaces/user'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userId: number = 0;
  public user: User;
  constructor(private activatedRoute: ActivatedRoute, private authService: UserService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = parseInt(params['id']);
      this.authService.getUserById(this.userId).subscribe((response: any) => {
        console.log(response);
        this.user = response;
        
        
      });
      
    });

    this.activatedRoute.queryParams.subscribe((qPrams: any) => {
      console.log(qPrams);
    });
  }
}
