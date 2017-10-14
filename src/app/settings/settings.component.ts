import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from "../app.component";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user-service.service";
declare var $: any;


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css','../menu/menu.component.css']
})
export class SettingsComponent implements OnInit {

  userEmail: string;
  userName: string;
  companyName: string;
  userMobile: string;
  userId: string;

  constructor(private router: Router, private title: Title,private authService:AuthService,private userService:UserService) { }

  ngOnInit() {
    this.title.setTitle('Settings');

    let user = this.authService.getUserFromLocal();
    let user_parsed = JSON.parse(user);
    this.userEmail = user_parsed.email;
    this.userName = user_parsed.name;
    this.companyName = user_parsed.company_name;
    this.userMobile = user_parsed.mobile;
    this.userId = user_parsed.id;
  }
  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/home']);
    return false;
  }

}
