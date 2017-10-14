import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from "../app.component";
import { Router, RouterModule, NavigationEnd  } from "@angular/router";
import { AuthService } from "../services/auth.service";
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../menu/menu.component.css']
})
export class AboutComponent implements OnInit {

  userEmail: string;
  userName: string;
  companyName: string;
  userMobile: string;
  userId: string;

  constructor(private router: Router, private title: Title, private appComponent: AppComponent, private authService: AuthService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    
    this.title.setTitle('About - Fysu');

    let user = this.authService.getUserFromLocal();
    let user_parsed = JSON.parse(user);
    this.userEmail = user_parsed.email;
    this.userName = user_parsed.name;
    this.companyName = user_parsed.company_name;
    this.userMobile = user_parsed.mobile;
    this.userId = user_parsed.id;
  }

}
