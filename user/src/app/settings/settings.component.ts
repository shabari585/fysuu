import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from "../app.component";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user-service.service";
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
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

  basket_num:number;
  today_one = moment();
  dateForHeader:string;

  constructor(private router: Router, private title: Title,private authService:AuthService,private userService:UserService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.title.setTitle('Settings');

    this.dateForHeader = this.datePipe.transform(this.today_one, 'EEE, MMM d');

    let user = this.authService.getUserFromLocal();
    let user_parsed = JSON.parse(user);
    this.userEmail = user_parsed.email;
    this.userName = user_parsed.name;
    this.companyName = user_parsed.company_name;
    this.userMobile = user_parsed.mobile;
    this.userId = user_parsed.id;

    this.basket_num = parseInt(localStorage.getItem('basket_number'));
    if(this.basket_num == undefined || this.basket_num == null || this.basket_num == 0 || isNaN(this.basket_num) == true){
      // redirect to menu
      this.basket_num = 0;
      // alert('no');
    }else{
      // this.basket_num;
    }
  }
  onLogoutClick() {
    // alert('reached');
    this.authService.logout();
    this.router.navigate(['/home']);
    return false;
  }

}
