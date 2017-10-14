import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from "../app.component";
import { Router, RouterModule, NavigationEnd } from "@angular/router";
import { AuthService } from "../services/auth.service";
declare var $: any;


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css', '../menu/menu.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor(private router: Router, private title: Title, private appComponent: AppComponent, private authService: AuthService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.title.setTitle('Privacy Policy - Fysu');
  }

}
