import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from "../app.component";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../services/auth.service";
declare var $: any;



@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css', '../menu/menu.component.css', '../home/home.component.css']
})
export class RewardsComponent implements OnInit {

  constructor(private router: Router, private title: Title, private appComponent: AppComponent,private authService:AuthService) { }

  ngOnInit() {
    this.title.setTitle('Fysu - Rewards');
  }

}
