import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from "../app.component";
import { Router, RouterModule, NavigationEnd } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
declare var $: any;


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css', '../menu/menu.component.css']
})
export class PrivacyComponent implements OnInit {

  userEmail: string;
  userName: string;
  companyName: string;
  userMobile: string;
  userId: string;

  basket_num:number;

  today_one = moment();
  dateForHeader:string;

  constructor(private router: Router, private title: Title, private appComponent: AppComponent, private authService: AuthService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.dateForHeader = this.datePipe.transform(this.today_one, 'EEE, MMM d');

    this.basket_num = parseInt(localStorage.getItem('basket_number'));
    if(this.basket_num == undefined || this.basket_num == null || this.basket_num == 0 || isNaN(this.basket_num) == true){
      // redirect to menu
      this.basket_num = 0;
      // alert('no');
    }else{
      // this.basket_num;
    }
    
    this.title.setTitle('Privacy Policy - Fysu');

    if(this.authService.loggedIn() == true){
      let user = this.authService.getUserFromLocal();
      let user_parsed = JSON.parse(user);
      this.userEmail = user_parsed.email;
      this.userName = user_parsed.name;
      this.companyName = user_parsed.company_name;
      this.userMobile = user_parsed.mobile;
      this.userId = user_parsed.id;
    }else{
      this.basket_num = 0;
    }
  }

}
