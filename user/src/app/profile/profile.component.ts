import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../services/auth.service";
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../settings/settings.component.css','./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private title: Title, private authService: AuthService) { }

  userId:string;
  userEmail:string;
  userName:string;
  userMobile:number;

  ngOnInit() {
    this.title.setTitle('Settings: Profile');
    let user = this.authService.getUserFromLocal();
    let user_parsed = JSON.parse(user);
    this.userEmail = user_parsed.email;
    this.userName = user_parsed.name;
    this.userMobile = user_parsed.mobile;
    this.userId = user_parsed.id;
  }
  profileUpdate(userEmail, userName, userMobile){
    let user = {
      id: this.userId,
      name: this.userName,
      email: this.userEmail,
      mobile: this.userMobile
    }
    // Update in the backend
    this.authService.updateUser(user).subscribe(res=>{
      if(res.success){
        console.log(res.msg);
      }else{
        console.log(res.msg);
      }
    });
    localStorage.setItem('user',JSON.stringify(user));
  }

}
