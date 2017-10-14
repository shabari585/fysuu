import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from "../app.component";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../services/auth.service";
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css','../menu/menu.component.css']
})
export class ContactComponent implements OnInit {

  userEmail: string;
  userName: string;
  companyName: string;
  userMobile: string;
  userId: string;

  constructor(private router: Router, private title: Title, private appComponent: AppComponent, private authService: AuthService) { }

  ngOnInit() {
    this.title.setTitle('Contact - Fysu');

    let user = this.authService.getUserFromLocal();
    let user_parsed = JSON.parse(user);
    this.userEmail = user_parsed.email;
    this.userName = user_parsed.name;
    this.companyName = user_parsed.company_name;
    this.userMobile = user_parsed.mobile;
    this.userId = user_parsed.id;
    
  }

}
